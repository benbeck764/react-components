"use client";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";
import { FC, PropsWithChildren } from "react";

const AppToggleButtonGroup: FC<PropsWithChildren<ToggleButtonGroupProps>> = (
  props: PropsWithChildren<ToggleButtonGroupProps>
) => {
  const { children, ...toggleButtonGroupProps } = props;

  return (
    <ToggleButtonGroup {...toggleButtonGroupProps}>
      {children}
    </ToggleButtonGroup>
  );
};

export default AppToggleButtonGroup;
