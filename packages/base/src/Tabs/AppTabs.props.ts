import { TabsProps } from "@mui/material/Tabs";
import { SxProps, Theme } from "@mui/material/styles";

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
  dividerColor?: (theme: Theme) => string;
  selectedColor?: (theme: Theme) => string;
  hoverColor?: (theme: Theme) => string;
  hideDivider?: boolean;
};
