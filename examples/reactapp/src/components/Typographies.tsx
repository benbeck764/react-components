import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Typographies: FC = () => {
  return (
    <Box>
      <Typography variant="h5">Typographies</Typography>
      <Stack direction="row" component="section">
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
      </Stack>
    </Box>
  );
};

export default Typographies;
