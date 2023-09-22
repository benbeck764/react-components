import { styled, Box, TypographyVariants } from "@mui/material";

type EllipsingTextContainerProps = {
  lines: number;
} & (
  | {
      reserveHeight: boolean;
      variant: keyof TypographyVariants;
    }
  | {
      reserveHeight?: never;
      variant?: never;
    }
);

export const StyledEllipsingTextContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "lines" && prop !== "reserveHeight" && prop !== "variant",
})<EllipsingTextContainerProps>(
  ({
    lines: $lines,
    reserveHeight: $reserveHeight,
    variant: $variant,
    theme,
  }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: $lines,
    WebkitBoxOrient: "vertical",
    ...($reserveHeight
      ? {
          height: theme.custom.lineHeights[$variant] * $lines,
          minHeight: theme.custom.lineHeights[$variant] * $lines,
        }
      : {}),
  })
);
