"use client";
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type BreakpointOrNull = Breakpoint | null;

export enum BreakpointDevice {
  Desktop = 0,
  Tablet = 1,
  Mobile = 2,
}

export type AppBreakpoint = {
  breakpoint: Breakpoint;
  device: BreakpointDevice;
};

export const useBreakpoint = (): AppBreakpoint => {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();
  const breakpoint =
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      const matches = useMediaQuery(theme.breakpoints.up(key), {
        noSsr: true,
      });
      return !output && matches ? key : output;
    }, null) || "xs";

  const device =
    breakpoint === "xl" || breakpoint === "lg"
      ? BreakpointDevice.Desktop
      : breakpoint === "md"
      ? BreakpointDevice.Tablet
      : BreakpointDevice.Mobile;

  return {
    breakpoint,
    device,
  };
};
