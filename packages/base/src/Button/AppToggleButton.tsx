"use client";
import { FC, PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";

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
