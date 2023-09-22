import {
  Breakpoint,
  createTheme,
  PaletteColor,
  PaletteColorOptions,
  Theme,
  TypographyVariants,
} from "@mui/material";

export type HeaderHeights = { [key in Breakpoint]: number };
export type FooterHeights = { [key in Breakpoint]: number };
export type PageNotificationHeights = { [key in Breakpoint]: number };
export type ContentWidths = { [key in Breakpoint]: number };
export type PageWidths = { [key in Breakpoint]: number };

export interface CustomThemeOptions {
  headerHeights: HeaderHeights;
  footerHeights: FooterHeights;
  contentWidths: ContentWidths;
  pageContentMargin: number;
  pageWidths: PageWidths;
  lineHeights: { [key in keyof TypographyVariants]: number };
  spacing: number;
}

// Utilize TypeScript Module Augmentation to Augment Custom Theme Colors
declare module "@mui/material/styles" {
  interface Theme {
    custom: CustomThemeOptions;
  }

  interface ThemeOptions {
    custom: CustomThemeOptions;
  }

  interface Palette {
    coolGrey: Palette["grey"];
    tertiary: PaletteColor;
  }

  interface PaletteOptions {
    coolGrey: PaletteOptions["grey"];
    tertiary?: PaletteColorOptions;
  }

  interface TypographyVariants {
    paragraph: React.CSSProperties;
    paragraphBold: React.CSSProperties;
    paragraphLink: React.CSSProperties;
    paragraphLarge: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
    paragraphSmallBold: React.CSSProperties;
    paragraphSmallLink: React.CSSProperties;
    numberedList: React.CSSProperties;

    mobileParagraph: React.CSSProperties;
    mobileParagraphBold: React.CSSProperties;
    mobileParagraphExtraSmall: React.CSSProperties;
    mobileParagraphExtraSmallBold: React.CSSProperties;
    mobileParagraphSmall: React.CSSProperties;
    mobileParagraphSmallBold: React.CSSProperties;
    mobileLabel: React.CSSProperties;

    iconExtraSmall: React.CSSProperties;
    iconSmall: React.CSSProperties;
    iconMedium: React.CSSProperties;
    iconLarge: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    paragraph: React.CSSProperties;
    paragraphBold: React.CSSProperties;
    paragraphLink: React.CSSProperties;
    paragraphLarge: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
    paragraphSmallBold: React.CSSProperties;
    paragraphSmallLink: React.CSSProperties;
    numberedList: React.CSSProperties;

    mobileParagraph: React.CSSProperties;
    mobileParagraphBold: React.CSSProperties;
    mobileParagraphExtraSmall: React.CSSProperties;
    mobileParagraphExtraSmallBold: React.CSSProperties;
    mobileParagraphSmall: React.CSSProperties;
    mobileParagraphSmallBold: React.CSSProperties;
    mobileLabel: React.CSSProperties;

    iconExtraSmall: React.CSSProperties;
    iconSmall: React.CSSProperties;
    iconMedium: React.CSSProperties;
    iconLarge: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }

  interface ButtonPropsSizeOverrides {
    extraSmall: true;
    extraLarge: true;
  }

  interface ToggleButtonPropsSizeOverrides {
    extraSmall: true;
    extraLarge: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/Icon" {
  interface IconPropsSizeOverrides {
    extraSmall: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    extraSmall: true;
    large: true;
    extraLarge: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    extraSmall: true;
    large: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraph: true;
    paragraphBold: true;
    paragraphLink: true;
    paragraphLarge: true;
    paragraphSmall: true;
    paragraphSmallBold: true;
    paragraphSmallLink: true;
    numberedList: true;

    mobileParagraph: true;
    mobileParagraphBold: true;
    mobileParagraphSmall: true;
    mobileParagraphSmallBold: true;
    mobileParagraphExtraSmall: true;
    mobileParagraphExtraSmallBold: true;
    mobileLabel: true;

    iconExtraSmall: true;
    iconSmall: true;
    iconMedium: true;
    iconLarge: true;
  }
}
