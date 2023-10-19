import CustomThemeProvider from "@benbeck764/react-components/_theme";
import AppContent from "./AppContent";
import { theme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
