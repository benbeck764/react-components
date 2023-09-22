import { FC } from "react";
import { Box, Backdrop, CircularProgress, Theme } from "@mui/material";
import { circularProgressPropsBase } from "./constants";

const AppPageLoader: FC = () => {
  return (
    <Box>
      <Backdrop
        sx={{
          color: (theme: Theme) => theme.palette.background.default,
          zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress {...circularProgressPropsBase} />
      </Backdrop>
    </Box>
  );
};

export default AppPageLoader;
