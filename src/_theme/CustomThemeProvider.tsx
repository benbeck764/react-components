import { FC, PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CustomTheme } from "./overrides.theme";
import { getMUITheme } from "./mui.theme";
import { defaultThemeOptions } from "./base.theme";

type CustomThemeProviderProps = {
  theme: CustomTheme;
};

const CustomThemeProvider: FC<PropsWithChildren<CustomThemeProviderProps>> = (
  props: PropsWithChildren<CustomThemeProviderProps>
) => {
  const { theme, children } = props;

  const themeToUse = {
    ...createTheme(getMUITheme(defaultThemeOptions)),
    ...theme,
  };

  return <ThemeProvider theme={themeToUse}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
