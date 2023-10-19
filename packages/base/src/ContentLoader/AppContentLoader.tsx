"use client";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { StyledOverlay, StyledLoaderWrapper } from "./ContentLoader.styles";
import CircularProgress from "@mui/material/CircularProgress";

export interface AppContentLoaderProps {
  loading: boolean;
  sx?: SxProps<Theme>;
}

const AppContentLoader: FC<AppContentLoaderProps> = (
  props: AppContentLoaderProps
) => {
  return (
    <StyledOverlay hidden={!props.loading} sx={props.sx}>
      <StyledLoaderWrapper>
        <CircularProgress
          color="secondary"
          variant="indeterminate"
          size="3.25em"
          thickness={4}
        />
      </StyledLoaderWrapper>
    </StyledOverlay>
  );
};

export default AppContentLoader;
