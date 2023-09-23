import { SxProps, ToggleButton, Theme } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type AppToggleButtonProps = {
  value: string;
  sx?: SxProps<Theme>;
};

const AppToggleButton: FC<PropsWithChildren<AppToggleButtonProps>> = (
  props: PropsWithChildren<AppToggleButtonProps>
) => {
  const { children, ...toggleButtonProps } = props;
  return <ToggleButton {...toggleButtonProps}>{children}</ToggleButton>;
};

export default AppToggleButton;
