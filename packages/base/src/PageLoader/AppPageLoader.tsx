"use client";
import { FC } from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
        <CircularProgress
          color="secondary"
          variant="indeterminate"
          size="3.25em"
          thickness={4}
        />
      </Backdrop>
    </Box>
  );
};

export default AppPageLoader;
