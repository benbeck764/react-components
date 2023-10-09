"use client";
import Button, { ButtonProps } from "@mui/material/Button";
import { FC } from "react";

export interface AppButtonProps extends ButtonProps {}

const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const { ...buttonProps } = props;

  return <Button {...buttonProps}></Button>;
};

export default AppButton;
