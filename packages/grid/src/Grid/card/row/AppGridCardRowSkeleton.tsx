"use client";
import Grid from "@mui/material/Grid";
import { AppGridSkeletonCard } from "../card/AppGridSkeletonCard";
import { AppGridCardRowBaseProps } from "./common";

export function AppGridCardRowSkeleton<TItem>(props: {
  baseProps: AppGridCardRowBaseProps<TItem>;
  items: (TItem | undefined)[];
}): JSX.Element {
  const { baseProps, items } = props;

  return (
    <Grid
      container
      columnSpacing={baseProps.cardViewDefinition.columnSpacing ?? 2}
      pb={baseProps.lastRow ? 0 : baseProps.cardViewDefinition.rowSpacing ?? 2}
    >
      {items.map((_, index: number) => (
        <AppGridSkeletonCard
          key={index}
          cardViewDefinition={baseProps.cardViewDefinition}
        />
      ))}
    </Grid>
  );
}
