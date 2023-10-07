import { FC } from "react";
import Stack from "@mui/material/Stack";
import { StyledPageContainer, StyledPageContent } from "./App.styles";
import Buttons from "./components/Buttons";
import Typographies from "./components/Typographies";
import Grids from "./components/Grids";

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
        <Stack direction="column" gap={5}>
          <Typographies />
          <Buttons />
          <Grids />
        </Stack>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default AppContent;
