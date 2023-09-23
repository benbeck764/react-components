import { TabsProps, SxProps, Theme } from "@mui/material";

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
