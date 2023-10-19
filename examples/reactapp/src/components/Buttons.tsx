import AppButton from "@benbeck764/react-components/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
