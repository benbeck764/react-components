import { FC, PropsWithChildren } from "react";
import { StyledPageContainer, StyledPageContent } from "./App.styles";
import Stack from "@mui/material/Stack";

const AppContent: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Stack>
      <StyledPageContainer
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
      >
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPageContainer>
    </Stack>
  );
};

export default AppContent;
