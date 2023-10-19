import { FC, PropsWithChildren } from "react";
import deepmerge from "deepmerge";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

  const defaultTheme = createTheme(getMUITheme(defaultThemeOptions));
  const mergedTheme = deepmerge(defaultTheme, theme);

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
