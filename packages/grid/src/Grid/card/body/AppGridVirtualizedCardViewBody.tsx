"use client";
import Box from "@mui/material/Box";
import {
  AppGridProps,
  AppGridCardViewDefinition,
  AppRowData,
} from "../../AppGrid.props";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { getChunks } from "@benbeck764/react-components-common";
import { getCardRowData } from "./common";
import { useEffect, useState, lazy } from "react";

export function AppGridCardViewVirtualizedBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
}): JSX.Element {
  const virtualizedProps = props.cardViewDefinition.virtualizedProps;
  const dataGridProps = props.dataGridProps;

  const [Virtuoso, setVirtuso] = useState<any>();

  useEffect(() => {
    try {
      const loadReactVirtuoso = async () => {
        const reactVirtuosoModule = await import("react-virtuoso");
        if (reactVirtuosoModule) setVirtuso(reactVirtuosoModule.Virtuoso);
      };

      if (virtualizedProps?.enabled) {
        loadReactVirtuoso();
      }
    } catch {
      console.error("Error: failed to import react-virtuoso.");
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

  if (!Virtuoso) return <></>;

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
