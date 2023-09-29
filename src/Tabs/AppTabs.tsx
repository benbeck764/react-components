import { FC, useEffect, useState } from "react";
import { Box, Tab, Typography, Stack, Divider } from "@mui/material";
import { StyledDivider, StyledTabs } from "./AppTabs.styles";
import { AppTabsProps, TabItem } from "./AppTabs.props";

const AppTabs: FC<AppTabsProps> = (props: AppTabsProps) => {
  const {
    tabs,
    onChange,
    reverseIndicator = false,
    smallDivider,
    containerSx,
    dividerSx,
    hideDivider,
    uncontrolledInput,
    orientation = "horizontal",
    ...rest
  } = props;

  const [currentTab, setCurrentTab] = useState(props.value ?? 0);

  useEffect(() => {
    if (typeof props.value !== "undefined") setCurrentTab(props.value);
  }, [props.value]);

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    if (!uncontrolledInput) setCurrentTab(index);
    onChange?.(event, index);
  };

  return (
    <Box sx={containerSx}>
      <Stack direction={orientation === "vertical" ? "row" : "column"}>
        {reverseIndicator && (
          <Box>
            {!hideDivider && (
              <StyledDivider
                orientation={orientation}
                reverse={reverseIndicator}
                sx={{
                  ...dividerSx,
                  ...(smallDivider && { width: "fit-content" }),
                }}
              />
            )}
          </Box>
        )}
        <Box>
          <StyledTabs
            value={currentTab}
            onChange={handleChange}
            aria-label="app-tabs"
            {...rest}
            orientation={orientation}
            reverse={reverseIndicator}
            TabIndicatorProps={{
              sx: {
                ...(reverseIndicator &&
                  orientation === "horizontal" && { top: 0 }),
                ...(reverseIndicator &&
                  orientation === "vertical" && { left: 0 }),
              },
            }}
          >
            {tabs.map((item: TabItem, index: number) => {
              return (
                <Tab
                  key={index}
                  label={
                    <Typography
                      variant={
                        currentTab === index ? "paragraphBold" : "paragraph"
                      }
                    >
                      {item.label}
                    </Typography>
                  }
                  {...getTabControlProps(index)}
                  disableRipple
                  disabled={item.disabled}
                />
              );
            })}
          </StyledTabs>
        </Box>
        {!reverseIndicator && (
          <Box>
            {!hideDivider && (
              <StyledDivider
                orientation={orientation}
                reverse={reverseIndicator}
                sx={{
                  ...dividerSx,
                  ...(smallDivider && { width: "fit-content" }),
                }}
              />
            )}
          </Box>
        )}
        <Box>
          {tabs.map((item: TabItem, index: number) => {
            return (
              <Box
                key={index}
                role="tabpanel"
                hidden={index !== currentTab}
                pt={1}
                {...getPanelControlProps(index)}
              >
                {currentTab === index && item.children}
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

function getTabControlProps(index: number) {
  return {
    id: `app-tab-${index}`,
    "aria-controls": `app-tabpanel-${index}`,
    tabIndex: 0,
  };
}

function getPanelControlProps(index: number) {
  return {
    id: `app-tabpanel-${index}`,
    "aria-labelledby": `app-tab-${index}`,
  };
}

AppTabs.defaultProps = {
  orientation: "horizontal",
  reverseIndicator: false,
};

export default AppTabs;
