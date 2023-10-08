"use client";
import { FC, useEffect, useState } from "react";
import { StyledDivider, StyledTabs } from "./AppTabs.styles";
import { AppTabsProps, TabItem } from "./AppTabs.props";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const AppTabs: FC<AppTabsProps> = (props: AppTabsProps) => {
  const {
    tabs,
    onChange,
    reverseIndicator = false,
    smallDivider,
    containerSx,
    dividerColor,
    selectedColor,
    hoverColor,
    hideDivider,
    orientation = "horizontal",
    ...rest
  } = props;

  const [currentTab, setCurrentTab] = useState(props.value ?? 0);

  useEffect(() => {
    if (typeof props.value !== "undefined") setCurrentTab(props.value);
  }, [props.value]);

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    setCurrentTab(index);
    onChange?.(event, index);
  };

  return (
    <Box sx={containerSx}>
      <Stack direction={orientation === "vertical" ? "row" : "column"}>
        <Box>
          {reverseIndicator && (
            <Box>
              {!hideDivider && (
                <StyledDivider
                  orientation={orientation}
                  reverse={reverseIndicator}
                  dividerColor={dividerColor}
                  sx={{
                    ...(smallDivider && { width: "fit-content" }),
                  }}
                />
              )}
            </Box>
          )}
          <StyledTabs
            value={currentTab}
            onChange={handleChange}
            aria-label="app-tabs"
            {...rest}
            orientation={orientation}
            reverse={reverseIndicator}
            dividerColor={dividerColor}
            selectedColor={selectedColor}
            hoverColor={hoverColor}
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
          {!reverseIndicator && (
            <Box>
              {!hideDivider && (
                <StyledDivider
                  orientation={orientation}
                  reverse={reverseIndicator}
                  dividerColor={dividerColor}
                  sx={{
                    ...(smallDivider && { width: "fit-content" }),
                  }}
                />
              )}
            </Box>
          )}
        </Box>

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

export default AppTabs;
