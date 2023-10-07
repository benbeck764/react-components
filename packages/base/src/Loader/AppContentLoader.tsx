"use client";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { StyledOverlayBox, StyledCenteredBox } from "./Loader.styles";
import { circularProgressPropsBase } from "./constants";
import CircularProgress from "@mui/material/CircularProgress";

export interface AppContentLoaderProps {
  loading: boolean;
  sx?: SxProps<Theme>;
}

const AppContentLoader: FC<AppContentLoaderProps> = (
  props: AppContentLoaderProps
) => {
  return (
    <StyledOverlayBox hidden={!props.loading} sx={props.sx}>
      <StyledCenteredBox>
        <CircularProgress {...circularProgressPropsBase} />
      </StyledCenteredBox>
    </StyledOverlayBox>
  );
};

export default AppContentLoader;
