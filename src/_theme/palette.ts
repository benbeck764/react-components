import { PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  grey: {
    100: "#F4F4F4",
    200: "#E0E0E0",
    300: "#C6C6C6",
    400: "#A8A8A8",
    500: "#8D8D8D",
    600: "#6F6F6F",
    700: "#525252",
    800: "#393939",
    900: "#262626",
  },
  coolGrey: {
    100: "#F2F4F8",
    200: "#DDE1E6",
    300: "#C1C7CD",
    400: "#A2A9B0",
    500: "#878D96",
    600: "#697077",
    700: "#4D5358",
    800: "#343A3F",
    900: "#21272A",
  },
};

export const paletteOptions: PaletteOptions = {
  ...palette,
  mode: "light",
  background: {
    default: palette.grey?.[100] ?? "#F4F4F4",
  },
  primary: {
    main: "#0078A3",
    light: "#1FC3FF",
    dark: "#004B66",
  },
  secondary: {
    main: "#DDE1E6",
    light: "#58B7ED",
    dark: "#C1C7CD",
  },
  action: {
    disabled: "#C1C7CD",
    focus: "#000000",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  success: {
    main: "#00C853",
    dark: "#1B8031",
  },
  error: {
    main: "#B5121B",
  },
  warning: {
    main: "#E27800",
  },
  info: {
    main: "#000000",
  },
};
