import { Box } from "@mui/material";
import {
  AppGridProps,
  AppGridCardViewDefinition,
  AppRowData,
} from "../../AppGrid.props";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { getChunks } from "@benbeck764/react-components-common";
import { getCardRowData } from "./common";
import { useEffect, useState } from "react";

export function AppGridCardViewVirtualizedBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  const virtualizedProps = props.cardViewDefinition.virtualizedProps;
  const [Virtuoso, setVirtuso] = useState<any>();

  const dataGridProps = props.dataGridProps;

  useEffect(() => {
    const loadReactVirtuoso = async () => {
      const reactVirtusoModule = await import("react-virtuoso");
      const virtuoso = reactVirtusoModule.Virtuoso;
      setVirtuso(virtuoso);
    };

    if (virtualizedProps?.enabled) {
      loadReactVirtuoso();
    }
  }, []);

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
      itemContent={(_index: number, row: AppRowData) => (
        <Box mb={props.cardViewDefinition.rowSpacing ?? 2}>{row.content}</Box>
      )}
    />
  );
}
