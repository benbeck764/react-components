"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { theme } from "./theme";
import CustomThemeProvider from "@benbeck764/react-components/_theme";

// https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-ts
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <CustomThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </CustomThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
