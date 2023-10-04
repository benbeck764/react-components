import { Box, Typography, CardContent, Stack } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import AppGrid from "../AppGrid";
import { AppGridComponentContainers } from "../AppGrid.props";
import { AppGridContainerProps } from "./AppGridContainer.props";
import {
  StyledCard,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledControlsContainer,
} from "./AppGridContainer.styles";

function AppGridContainer<TItem>(
  props: AppGridContainerProps<TItem>
): JSX.Element {
  const {
    dataGridProps: { displayMode },
  } = props;

  const [containers, setContainers] = useState<AppGridComponentContainers>({});
  const containersRef = useRef<AppGridComponentContainers>({});

  const showHeader =
    props.title || props.children || props.customControlsContainer;
  const pagingMode = props.dataGridProps.data.pagingMode;

  const setContainerRef = useCallback(
    (
      containerName: keyof AppGridComponentContainers,
      element: HTMLElement | null
    ) => {
      if (containersRef.current[containerName]) {
        return;
      }
      containersRef.current[containerName] = element;
      if (
        (showHeader &&
          containersRef.current.filterInputContainer &&
          containersRef.current.paginationContainer) ||
        containersRef.current.paginationContainer
      ) {
        setContainers(containersRef.current);
      }
    },
    [showHeader]
  );

  const dataGridProps: typeof props.dataGridProps = {
    ...props.dataGridProps,
    displayMode,
    componentContainers: {
      ...containers,
      ...props.dataGridProps.componentContainers,
    },
  };

  return (
    <>
      <StyledCard
        sx={{
          ...props.sx,
        }}
      >
        <CardContent sx={{ padding: "0px !important" }}>
          <StyledCardHeaderContainer sx={props.headerSx}>
            <StyledCardHeader elevation={0} sx={props.secondarySx}>
              {showHeader && (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    pb: dataGridProps.displayMode === "table" ? 2 : 0,
                    ...props.controlsContainerSx,
                  }}
                >
                  {props.customControlsContainer ? (
                    props.customControlsContainer
                  ) : (
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography variant="h3" sx={{ mr: 1 }}>
                        {props.title}
                      </Typography>
                      <StyledControlsContainer>
                        <Box
                          ref={(elem: HTMLElement | null) =>
                            setContainerRef("filterInputContainer", elem)
                          }
                          sx={{ mr: 2 }}
                        />
                        {props.children}
                      </StyledControlsContainer>
                    </Stack>
                  )}
                </Box>
              )}
            </StyledCardHeader>
          </StyledCardHeaderContainer>

          {displayMode === "table" && (
            <Box>
              <AppGrid {...dataGridProps} />
            </Box>
          )}
        </CardContent>
      </StyledCard>

      {displayMode === "card" && (
        <Box sx={{ position: "relative" }}>
          <AppGrid {...dataGridProps} />
        </Box>
      )}

      {pagingMode !== "none" && (
        <Box
          ref={(elem: HTMLElement | null) =>
            setContainerRef("paginationContainer", elem)
          }
        />
      )}
    </>
  );
}

export default AppGridContainer;
