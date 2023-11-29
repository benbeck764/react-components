"use client";
import Grid from "@mui/material/Grid";
import { AppGridCardViewDefinition } from "../../AppGrid.props";
import { StyledCard } from "../AppGridCardView.styles";

export function AppGridSkeletonCard<TItem>(props: {
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  const virtualizedRow =
    props.cardViewDefinition.virtualizedProps?.enabled ?? false;

  return (
    <Grid item xs={12 / props.cardViewDefinition.columnCount}>
      <StyledCard
        sx={{
          padding: 0,

          ...(virtualizedRow ? { height: "100%" } : {}),
          ...props.cardViewDefinition.cardSx,
        }}
      >
        {typeof props.cardViewDefinition?.loadingPlaceholder === "function"
          ? props.cardViewDefinition.loadingPlaceholder(
              props.cardViewDefinition
            )
          : props.cardViewDefinition?.loadingPlaceholder || ""}
      </StyledCard>
    </Grid>
  );
}
