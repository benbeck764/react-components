import { FC, useEffect, useState } from "react";
import {
  SxProps,
  Theme,
  Box,
  Tabs,
  TabsProps,
  Tab,
  Typography,
} from "@mui/material";
import { StyledAppBar, StyledHeaderBox, StyledDivider } from "./AppTabs.styles";

export interface TabItem {
  label: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface AppTabsProps extends TabsProps {
  tabs: TabItem[];
  onChange?: (event: React.SyntheticEvent, index: number) => void;
  smallDivider?: boolean;
  tabsetPrefix?: React.ReactNode;
  tabsetSuffix?: React.ReactNode;
  containerSx?: SxProps<Theme>;
  hideDivider?: boolean;
  uncontrolledInput?: boolean;
}

export const AppTabs: FC<AppTabsProps> = (props: AppTabsProps) => {
  const {
    tabs,
    onChange,
    smallDivider,
    tabsetPrefix,
    tabsetSuffix,
    containerSx: sx,
    hideDivider,
    uncontrolledInput,
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
    <Box sx={sx}>
      <StyledHeaderBox pb={1}>
        {tabsetPrefix && tabsetPrefix}
        <StyledAppBar
          position="static"
          sx={{ width: smallDivider ? "fit-content" : "100%" }}
        >
          <Tabs
            {...rest}
            value={currentTab}
            onChange={handleChange}
            aria-label="app-tabs"
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
          </Tabs>
          {!hideDivider && <StyledDivider />}
        </StyledAppBar>
        {tabsetSuffix && tabsetSuffix}
      </StyledHeaderBox>
      {tabs.map((item: TabItem, index: number) => {
        return (
          <Box
            key={index}
            role="tabpanel"
            hidden={index !== currentTab}
            {...getPanelControlProps(index)}
          >
            {currentTab === index && item.children}
          </Box>
        );
      })}
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
