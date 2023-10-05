import { Box, Typography, Theme, styled, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { AppGridDisplayMode } from "../AppGrid.props";
import { isString } from "@benbeck764/react-components-common";

export interface AppGridNoResultsFoundProps {
  message?: ReactNode;
  displayMode: AppGridDisplayMode;
  sx?: SxProps<Theme>;
}

export const AppGridNoResultsFound = (
  props: AppGridNoResultsFoundProps
): JSX.Element => {
  const displayModeSx =
    props.displayMode === "table" ? { mt: 2 } : { width: "100%", mt: 2 };
  return (
    <StyledBox
      sx={{
        ...displayModeSx,
        ...props.sx,
      }}
    >
      {props.message ? (
        <>
          {isString(props.message) ? (
            <Typography variant="paragraph">{props.message}</Typography>
          ) : (
            <>{props.message}</>
          )}
        </>
      ) : (
        <Typography variant="paragraph">No items found</Typography>
      )}
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
}));
