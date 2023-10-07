import { Breakpoint } from "@mui/material/styles";

export function getPropertyByBreakpoint<T>(
  obj: { xs: T; sm?: T; md?: T; lg?: T; xl?: T },
  breakpoint: Breakpoint | null
): T {
  switch (breakpoint) {
    // @ts-expect-error
    case "xl":
      if (obj.xl) {
        return obj.xl;
      }
    // @ts-expect-error
    case "lg":
      if (obj.lg) {
        return obj.lg;
      }
    // @ts-expect-error
    case "md":
      if (obj.md) {
        return obj.md;
      }
    // @ts-expect-error
    case "sm":
      if (obj.sm) {
        return obj.sm;
      }
    // eslint-disable-next-line no-fallthrough
    case "xs":
    default:
      return obj.xs;
  }
}
