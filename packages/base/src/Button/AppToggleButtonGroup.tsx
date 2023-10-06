import { FC, PropsWithChildren } from "react";
import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material";

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
