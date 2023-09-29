import { TabsProps, SxProps, Theme } from "@mui/material";

export type TabItem = {
  label: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export type AppTabsProps = Omit<TabsProps, "onChange"> & {
  tabs: TabItem[];
  onChange?: (event: React.SyntheticEvent, index: number) => void;
  reverseIndicator?: boolean;
  smallDivider?: boolean;
  containerSx?: SxProps<Theme>;
  dividerSx?: SxProps<Theme>;
  hideDivider?: boolean;
  uncontrolledInput?: boolean;
};
