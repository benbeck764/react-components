import { ReactNode } from "react";
import {
  AppGridColumnDefinition,
  AppGridValueGetterProps,
  AppRowData,
} from "../../AppGrid.props";
import { ValueGetter } from "../AppGridTableView.props";
import { RowWrappers } from "../rows/AppGridRowWrapper";
import { AppGridRowProps } from "../rows/common";

export function createValueGetters<TItem>(
  columns: AppGridColumnDefinition<TItem>[]
): ValueGetter<TItem>[] {
  return columns.map((col: AppGridColumnDefinition<TItem>) => ({
    column: col,
    getValue:
      typeof col.value === "function"
        ? col.value
        : (props: AppGridValueGetterProps<TItem>) =>
            props.item[col.value as keyof TItem] as ReactNode,
  }));
}

export function getRowData<TItem>(
  props: AppGridRowProps<TItem>,
  id?: string
): AppRowData[] {
  const item = props.item;
  if (!item) {
    return [
      {
        id: id,
        type: "row-skeleton",
        content: <RowWrappers rowProps={props} rowType="row-skeleton" />,
      },
    ];
  }

  const rowData = [] as AppRowData[];
  const row = <RowWrappers rowProps={props} rowType="row" />;
  if (row) {
    rowData.push({
      id: id,
      type: "row",
      content: row,
    });
  }

  return rowData;
}
