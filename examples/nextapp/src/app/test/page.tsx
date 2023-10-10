import Typography from "@mui/material/Typography";
import { StyledTestBox } from "./test.styles";
import AppCard from "@benbeck764/react-components/Card/AppCard";

const TestPage = async () => {
  return (
    <>
      {/* <StyledPaper>
        <StyledTestBox />
      </StyledPaper> */}

      <AppCard>
        <StyledTestBox />
      </AppCard>

      {/* <StyledTestBox /> */}
      <Typography variant="h4">Test</Typography>
    </>
  );
};

export default TestPage;
