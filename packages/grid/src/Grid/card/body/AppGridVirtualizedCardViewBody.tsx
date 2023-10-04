import { Box } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import {
  AppGridProps,
  AppGridCardViewDefinition,
  AppRowData,
} from "../../AppGrid.props";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { getChunks } from "@utilities";
import { getCardRowData } from "./common";

export function AppGridCardViewVirtualizedBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  const virtualizedProps = props.cardViewDefinition.virtualizedProps;

  const dataGridProps = props.dataGridProps;

  // Grid Rows
  const rows: AppRowData[] = [];
  if (!getHasItems(dataGridProps)) {
    rows.push({
      type: "row",
      content: (
        <AppGridNoResultsFound
          message={props.dataGridProps.noItemsMessage}
          sx={props.dataGridProps.noItemsMessageSx}
          displayMode="card"
        />
      ),
    });
  } else {
    const items = getItems(dataGridProps.data);
    const rowItems = getChunks(items, props.cardViewDefinition.columnCount);
    rowItems.forEach(
      (
        items: { item: TItem | undefined; isLoading: boolean }[],
        rowIndex: number
      ) => {
        const newRow = getCardRowData(
          {
            rowIndex,
            cardViewDefinition: props.cardViewDefinition,
          },
          items.map((i) => i.item),
          dataGridProps
        );
        if (newRow) rows.push(newRow);
      }
    );
  }

  return (
    <Virtuoso
      useWindowScroll={virtualizedProps?.useWindowScroll}
      data={rows}
      itemContent={(_index, row) => (
        <Box mb={props.cardViewDefinition.rowSpacing ?? 2}>{row.content}</Box>
      )}
    />
  );
}
