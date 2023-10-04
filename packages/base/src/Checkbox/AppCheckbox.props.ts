import { CheckboxProps, SxProps, Theme } from "@mui/material";

export type CheckboxItem = {
  label: string | JSX.Element;
  checked: boolean;
  name?: string;
  additionalValue?: unknown;
  disabled?: boolean;
};

export type CheckboxTypedItem<T> = CheckboxItem & {
  additionalValue?: T;
};

export type AppCheckboxIcon = "check" | "minus";
export type AppCheckboxSize = "small" | "medium" | "large";
export type AppCheckboxVariant = "primary" | "secondary";

export type AppCheckboxProps = {
  item: CheckboxItem;
  icon?: AppCheckboxIcon;
  size?: AppCheckboxSize;
  variant?: AppCheckboxVariant;
  hidden?: boolean;
  checkboxProps?: CheckboxProps;
  stopPropagation?: boolean;
  sx?: SxProps<Theme>;
  onCheckedChanged: (item: CheckboxItem) => void;
  loadingPlaceholder?: boolean;
};
