import React, { FC } from "react";
import {
  Skeleton,
  SxProps,
  Theme,
  Typography,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { getRandomNumberWithVariance } from "@utilities";

type TypographySkeletonProps = {
  charCount: number;
  charCountVariance?: number;
  variant?: OverridableStringUnion<Variant, TypographyPropsVariantOverrides>;
  lines?: number;
  sx?: SxProps<Theme>;
};

const TypographySkeleton: FC<TypographySkeletonProps> = (
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

export default TypographySkeleton;
