import { Box } from "@mui/material";
import {
  AppGridColumnDefinition,
  AppGridProps,
  AppGridTableViewDefinition,
  AppRowData,
} from "../../AppGrid.props";
import { createValueGetters, getRowData } from "./common";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { useEffect, useState } from "react";

export function AppGridTableViewVirtualizedBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  tableViewDefinition: AppGridTableViewDefinition<TItem>;
}): JSX.Element {
  const dataGridProps = props.dataGridProps;
  const virtualizedProps = props.tableViewDefinition?.virtualizedProps;

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

  const valueGetters = createValueGetters(props.tableViewDefinition.columns);

  const items = getItems(dataGridProps.data);
  // If there's at least 1 loadingPlaceholder, then utilize the length of the page, otherwise filter to where items aren't loading
  let itemCount = props.tableViewDefinition.columns.find(
    (col: AppGridColumnDefinition<TItem>) =>
      col.loadingPlaceholder !== undefined
  )
    ? items.length
    : items.filter(
        (i: { item: TItem | undefined; isLoading: boolean }) => !i.isLoading
      ).length;
  const rows: AppRowData[] = [];
  if (!getHasItems(dataGridProps)) {
    itemCount = 1;
    rows.push({
      type: "no-items-row",
      content: (
        <AppGridNoResultsFound
          message={props.dataGridProps.noItemsMessage}
          sx={props.dataGridProps.noItemsMessageSx}
          displayMode="table"
        />
      ),
    });
  } else {
    items.forEach(
      (
        {
          item,
        }: {
          item: TItem | undefined;
          isLoading: boolean;
        },
        index: number
      ) => {
        const updatedRows = getRowData({
          item: item,
          previousItem: items[index - 1]?.item,
          valueGetters: valueGetters,
          tableViewDefinition: props.tableViewDefinition,
          itemIndex: index,
          onItemClicked: dataGridProps.onItemClicked,
          cursorStyle: dataGridProps.cursorStyle,
          itemCount: itemCount,
          filterText: dataGridProps.data.filterText,
        });
        rows.push(...updatedRows);
      }
    );
  }

  if (!Virtuoso) return <></>;

  return (
    <Virtuoso
      style={{ height: virtualizedProps?.height }}
      useWindowScroll={virtualizedProps?.useWindowScroll}
      data={rows}
      itemContent={(_index: number, row: AppRowData) => (
        <Box>{row.content}</Box>
      )}
    />
  );
}
