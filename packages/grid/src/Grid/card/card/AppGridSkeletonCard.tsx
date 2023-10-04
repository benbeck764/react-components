import { Card, Grid } from "@mui/material";
import { AppGridCardViewDefinition } from "../../AppGrid.props";

export function AppGridSkeletonCard<TItem>(props: {
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  return (
    <Grid item xs={12 / props.cardViewDefinition.columnCount}>
      <Card sx={{ ...props.cardViewDefinition.cardSx }}>
        {typeof props.cardViewDefinition?.loadingPlaceholder === "function"
          ? props.cardViewDefinition.loadingPlaceholder(
              props.cardViewDefinition
            )
          : props.cardViewDefinition?.loadingPlaceholder || ""}
      </Card>
    </Grid>
  );
}
