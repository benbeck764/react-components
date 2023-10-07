"use client";
import Grid from "@mui/material/Grid";
import { AppGridCardViewDefinition, AppGridProps } from "../../AppGrid.props";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { AppGridCard } from "../card/AppGridCard";

export function AppGridCardViewBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  const dataGridProps = props.dataGridProps;

  if (!getHasItems(dataGridProps)) {
    return (
      <Grid container spacing={2}>
        <AppGridNoResultsFound
          message={props.dataGridProps.noItemsMessage}
          sx={props.dataGridProps.noItemsMessageSx}
          displayMode="card"
        />
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        columnSpacing={props.cardViewDefinition.columnSpacing ?? 2}
        rowSpacing={props.cardViewDefinition.rowSpacing ?? 2}
      >
        {getItems(dataGridProps.data).map(({ item }, index: number) => (
          <AppGridCard
            key={index}
            item={item}
            cardViewDefinition={props.cardViewDefinition}
            index={index}
            onItemClicked={dataGridProps.onItemClicked}
            cursorStyle={dataGridProps.cursorStyle}
            hover={dataGridProps.hover}
          />
        ))}
      </Grid>
    );
  }
}
