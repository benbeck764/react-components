"use client";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { getRandomNumberWithVariance } from "@benbeck764/react-components-common";
import Typography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export type TypographySkeletonProps = {
  charCount: number;
  charCountVariance?: number;
  variant?: OverridableStringUnion<Variant, TypographyPropsVariantOverrides>;
  lines?: number;
  sx?: SxProps<Theme>;
};

export const TypographySkeleton: FC<TypographySkeletonProps> = (
  props: TypographySkeletonProps
) => {
  const { charCount, charCountVariance, variant, lines, sx } = props;

  const fullCharCount = charCountVariance
    ? getRandomNumberWithVariance(charCount, charCountVariance)
    : charCount;
  const lineCount = lines ?? 1;

  return (
    <>
      {Array.from(Array(lineCount).keys()).map((num: number) => (
        <Typography
          key={num}
          sx={{ ...sx, width: `${fullCharCount / lineCount}ch` }}
          variant={variant ?? "paragraph"}
          display="block"
        >
          <Skeleton />
        </Typography>
      ))}
    </>
  );
};
