import { styled, Box } from "@mui/material";

type EllipsingTextContainerProps = {
  lines: number;
} & (
  | {
      reserveHeight: number;
    }
  | {
      reserveHeight?: never;
    }
);

const StyledEllipsingTextContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "lines" && prop !== "reserveHeight" && prop !== "variant",
})<EllipsingTextContainerProps>(
  ({ lines: $lines, reserveHeight: $reserveHeight }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: $lines,
    WebkitBoxOrient: "vertical",
    ...($reserveHeight
      ? {
          height: $reserveHeight * $lines,
          minHeight: $reserveHeight * $lines,
        }
      : {}),
  })
);

export default StyledEllipsingTextContainer;
