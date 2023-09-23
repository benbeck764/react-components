import { FC } from "react";
import { CircularProgress, SxProps, Theme } from "@mui/material";
import { StyledOverlayBox, StyledCenteredBox } from "./Loader.styles";
import { circularProgressPropsBase } from "./constants";

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
