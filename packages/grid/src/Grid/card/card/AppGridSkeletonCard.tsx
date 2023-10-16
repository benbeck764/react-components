"use client";
import Grid from "@mui/material/Grid";
import { AppGridCardViewDefinition } from "../../AppGrid.props";
import { AppCard } from "@benbeck764/react-components";

export function AppGridSkeletonCard<TItem>(props: {
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  return (
    <Grid item xs={12 / props.cardViewDefinition.columnCount}>
      <AppCard cardSx={{ ...props.cardViewDefinition.cardSx }}>
        {typeof props.cardViewDefinition?.loadingPlaceholder === "function"
          ? props.cardViewDefinition.loadingPlaceholder(
              props.cardViewDefinition
            )
          : props.cardViewDefinition?.loadingPlaceholder || ""}
      </AppCard>
    </Grid>
  );
}
