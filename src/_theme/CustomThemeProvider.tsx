import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider, Theme } from "@mui/material";

type CustomComponentsProviderProps = {
  theme: Theme;
};

const CustomComponentsProvider: FC<
  PropsWithChildren<CustomComponentsProviderProps>
> = (props: PropsWithChildren<CustomComponentsProviderProps>) => {
  const { theme, children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomComponentsProvider;
