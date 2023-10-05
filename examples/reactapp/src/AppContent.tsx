import { AppButton } from "@benbeck764/react-components";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { StyledPageContainer, StyledPageContent } from "./App.styles";

const AppContent: FC = () => {
  return (
    <StyledPageContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
    >
      <StyledPageContent component="main">
        <Stack direction="row" gap={10}>
          <Stack direction="column" component="section">
            <Typography variant="h1">h1</Typography>
            <Typography variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="h5">h5</Typography>
            <Typography variant="h6">h6</Typography>
          </Stack>
          <Stack direction="column" component="section" gap={1}>
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
        </Stack>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default AppContent;
