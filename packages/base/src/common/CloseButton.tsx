"use client";
import CloseIcon from "@mui/icons-material/Close";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { SvgIconPropsSizeOverrides } from "@mui/material/SvgIcon";
import { OverridableStringUnion } from "@mui/types";
import { FC } from "react";

export interface CloseButtonProps extends IconButtonProps {
  fontSize?: OverridableStringUnion<
    "inherit" | "large" | "medium" | "small",
    SvgIconPropsSizeOverrides
  >;
}

export const CloseButton: FC<CloseButtonProps> = (props: CloseButtonProps) => {
  const { fontSize, ...rest } = { ...props };

  return (
    <IconButton color="primary" {...rest}>
      <CloseIcon fontSize={fontSize} />
    </IconButton>
  );
};
