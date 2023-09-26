import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { CustomTheme } from "./theme";

type CustomThemeProviderProps = {
  theme: CustomTheme;
};

const CustomThemeProvider: FC<PropsWithChildren<CustomThemeProviderProps>> = (
  props: PropsWithChildren<CustomThemeProviderProps>
) => {
  const { theme, children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
