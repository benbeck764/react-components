import { Theme, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { AppGridProps } from "../AppGrid.props";

type AppGridContainerPropsConditional =
  | {
      title?: string;
      subtitle?: string;
      renderClosed?: boolean;
      children?: ReactNode;
      customControlsContainer?: never;
    }
  | {
      title?: never;
      subtitle?: never;
      renderClosed?: never;
      children?: never;
      customControlsContainer?: JSX.Element;
    };

type AppGridContainerPropsBase = AppGridContainerPropsConditional & {
  sx?: SxProps<Theme>;
  headerSx?: SxProps<Theme>;
  secondarySx?: SxProps<Theme>;
  controlsContainerSx?: SxProps<Theme>;
};

export type AppGridContainerProps<TItem> = AppGridContainerPropsBase & {
  dataGridProps: AppGridProps<TItem>;
};
