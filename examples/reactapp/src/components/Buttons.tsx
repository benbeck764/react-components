import { AppButton } from "@benbeck764/react-components";
import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Buttons: FC = () => {
  return (
    <Box>
      <Typography variant="h5">Buttons</Typography>
      <Stack direction="row" component="section" gap={1}>
        <AppButton size="small" variant="contained">
          Small
        </AppButton>
        <AppButton size="medium" variant="contained">
          Medium
        </AppButton>
        <AppButton size="large" variant="contained">
          Large
        </AppButton>
      </Stack>
    </Box>
  );
};

export default Buttons;
