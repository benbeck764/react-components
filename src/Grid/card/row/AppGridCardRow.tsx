import { Grid } from "@mui/material";
import { AppGridProps } from "../../AppGrid.props";
import { AppGridCard } from "../card/AppGridCard";
import { AppGridCardRowBaseProps } from "./common";

export function AppGridCardRow<TItem>(props: {
  baseProps: AppGridCardRowBaseProps<TItem>;
  items: (TItem | undefined)[];
  dataGridProps: AppGridProps<TItem>;
}): JSX.Element {
  const { baseProps, items, dataGridProps } = props;
  const columnSpacing = baseProps.cardViewDefinition.columnSpacing;

  return (
    <Grid container columnSpacing={columnSpacing ?? 2}>
      {items.map((item: TItem | undefined, index: number) => (
        <AppGridCard
          key={index}
          item={item}
          cardViewDefinition={baseProps.cardViewDefinition}
          index={baseProps.rowIndex + index}
          onItemClicked={dataGridProps.onItemClicked}
          cursorStyle={dataGridProps.cursorStyle}
        />
      ))}
    </Grid>
  );
}
