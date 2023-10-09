"use client";
import { FC, RefObject } from "react";
import { Theme, SxProps } from "@mui/material/styles";
import { AppButton } from "@benbeck764/react-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type AppGridLoadMoreProps = {
  pageEndIndex: number;
  onNextPageRequested: (pageIndex: number) => void;
  sx?: SxProps<Theme>;
};

export const AppGridLoadMore: FC<AppGridLoadMoreProps> = (
  props: AppGridLoadMoreProps
) => {
  const handleClick = () => {
    props.onNextPageRequested(props.pageEndIndex + 1);
  };

  return (
    <Box
      sx={{
        mt: 3,
        mb: { xs: 6, sm: 5, md: 5, lg: 3 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppButton
        variant="contained"
        color="secondary"
        onClick={handleClick}
        sx={{ width: 200, height: { xs: 40, xl: 32 }, ...props.sx }}
      >
        <Typography component="span" variant="paragraphBold">
          Load More
        </Typography>
      </AppButton>
    </Box>
  );
};
