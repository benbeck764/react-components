import {
  IconButtonProps,
  IconButton,
  SvgIconPropsSizeOverrides,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import CloseIcon from "@mui/icons-material/Close";
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

export default CloseButton;
