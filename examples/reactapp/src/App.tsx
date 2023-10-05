import { CssBaseline } from "@mui/material";
import AppContent from "./AppContent";
import { CustomThemeProvider } from "@benbeck764/react-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
