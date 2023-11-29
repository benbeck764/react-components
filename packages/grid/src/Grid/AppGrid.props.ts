import { ReactNode } from "react";
import { Theme, SxProps } from "@mui/material/styles";
import * as CSS from "csstype";
import { SelectItem } from "@benbeck764/react-components/Select";
import { TableCellProps } from "@mui/material/TableCell";
import { TableProps } from "@mui/material/Table";
import { TableRowProps } from "@mui/material/TableRow";
import { BoxProps } from "@mui/material/Box";

export type KeyOfType<T, TProp> = {
  [P in keyof T]: T[P] extends TProp ? P : never;
}[keyof T];
export type BodyCellProps = TableCellProps & { [key: string]: unknown };

/**
 * Specific row types
 */
export type AppGridRowType =
  | "row"
  | "row-skeleton"
  | "card-row"
  | "no-items-row";

export interface AppRowData {
  id?: string;
  type: AppGridRowType;
  content: React.ReactNode;
}

/**
 * Properties for the data grid's value getter function.
 * @param {TItem} item The grid object used to populate the row.
 * @param {number} rowIndex The row index of the given item.
 * @param {string | undefined} filterText The filter text applied to the value.
 * @param {SetNavigableElementCallback} setNavigableElement
 */

export interface AppGridValueGetterProps<TItem> {
  item: TItem;
  itemIndex: number;
  filterText?: string;
}

export interface AppGridVirtualizedProps {
  enabled: true;
  useWindowScroll?: boolean;
  height?: number | string;
  loadingPlaceholderOnScroll?: boolean;
}

/**
 * Definition used to define a table column when displayMode == 'table'
 */
export interface AppGridColumnDefinition<TItem> {
  title: ReactNode;
  width?: string | number;
  horizontalAlignment?: "left" | "right" | "center";
  headerCellProps?: TableCellProps;
  bodyCellProps?:
    | ((item?: TItem, itemIndex?: number) => BodyCellProps)
    | BodyCellProps;
  loadingPlaceholder?:
    | ((column: AppGridColumnDefinition<TItem>, rowIndex: number) => ReactNode)
    | ReactNode;
  value:
    | ((props: AppGridValueGetterProps<TItem>) => ReactNode)
    | KeyOfType<TItem, ReactNode>;
}

/**
 * Properties to define the grid's table view.
 *
 * @param {AppGridColumnDefinition<TItem>[]} columns Defines the grid's columns and their contents.
 */
export interface AppGridTableViewDefinition<TItem> {
  columns: AppGridColumnDefinition<TItem>[];
  showHeader: boolean;
  //   insertCustomRow?: AppGridInsertCustomRowCallback<TItem>
  //   insertFooterRow?: AppGridInsertFooterRowCallback<TItem>
  //   rowFooterLoadingPlaceholder?: ((itemIndex: number) => ReactNode) | ReactNode
  tableProps?: TableProps;
  tableHeadSx?: SxProps<Theme>;
  tableHeadContainerSx?: SxProps<Theme>;
  customHeader?: React.ReactNode;
  //   isTableHeadSticky?: boolean
  tableBodySx?: SxProps<Theme>;
  bodyTableRowProps?:
    | ((item?: TItem, itemIndex?: number) => TableRowProps)
    | TableRowProps;
  virtualizedProps?: AppGridVirtualizedProps;
}

/**
 * Properties to define the grid's table view across break points.
 *
 * @param {AppGridTableViewDefinition<TItem>} xs Controls how a grid card is rendered at the xs breakpoint.
 * @param {AppGridTableViewDefinition<TItem> | undefined} sm Controls how a grid row is rendered at the sm breakpoint.
 * @param {AppGridTableViewDefinition<TItem> | undefined} md Controls how a grid row is rendered at the md breakpoint.
 * @param {AppGridTableViewDefinition<TItem> | undefined} lg Controls how a grid row is rendered at the lg breakpoint.
 * @param {AppGridTableViewDefinition<TItem> | undefined} xl Controls how a grid row is rendered at the xl breakpoint.
 */
export interface AppGridTableViewDefinitions<TItem> {
  xs: AppGridTableViewDefinition<TItem>;
  sm?: AppGridTableViewDefinition<TItem>;
  md?: AppGridTableViewDefinition<TItem>;
  lg?: AppGridTableViewDefinition<TItem>;
  xl?: AppGridTableViewDefinition<TItem>;
}

/**
 * Properties to define the grid's card view.
 *
 * @param {(item: TItem) => ReactNode} getContent Defines the grid cards and their contents.
 * @param {number} columnCount The number of cards that will be rendered in each row.
 * @param {((cardViewDefinition: AppGridCardViewDefinition<TItem>) => ReactNode) | ReactNode} loadingPlaceholder Defines the grid cards loading skeleton.
 */
export interface AppGridCardViewDefinition<TItem> {
  getContent: (item: TItem, itemIndex: number) => ReactNode;
  columnCount: 1 | 2 | 3 | 4 | 6 | 12;
  columnSpacing?: number;
  rowSpacing?: number;
  cardSx?: SxProps<Theme>;
  loadingPlaceholder?:
    | ((cardViewDefinition: AppGridCardViewDefinition<TItem>) => ReactNode)
    | ReactNode;
  virtualizedProps?: AppGridVirtualizedProps;
  gridProps?: BoxProps;
}

/**
 * Properties to define the grid's card view across break points.
 *
 * @param {AppGridCardViewDefinition<TItem>} xs Controls how a grid card is rendered at the xs breakpoint.
 * @param {AppGridCardViewDefinition<TItem> | undefined} sm Controls how a grid card is rendered at the sm breakpoint.
 * @param {AppGridCardViewDefinition<TItem> | undefined} md Controls how a grid card is rendered at the md breakpoint.
 * @param {AppGridCardViewDefinition<TItem> | undefined} lg Controls how a grid card is rendered at the md breakpoint.
 * @param {AppGridCardViewDefinition<TItem> | undefined} xl Controls how a grid card is rendered at the xl breakpoint.
 */
export interface AppGridCardViewDefinitions<TItem> {
  xs: AppGridCardViewDefinition<TItem>;
  sm?: AppGridCardViewDefinition<TItem>;
  md?: AppGridCardViewDefinition<TItem>;
  lg?: AppGridCardViewDefinition<TItem>;
  xl?: AppGridCardViewDefinition<TItem>;
}

export type AppGridDataRequestChangeType =
  | "pagination-change"
  | "next-page-requested"
  | "filter-text-change"
  | "sort-by-change";

/**
 * Pagination properties for use in requesting and dispatching grid data.
 *
 * @param {string?} filterText The grid's filterText.
 * @param {number} pageSize The grid's pageSize.
 * @param {number} pageIndex The grid's pageIndex.
 */
export interface AppGridDataRequest {
  filterText?: string;
  pageSize: number;
  pageNumber: number;
  sortBy?: number;
}

export type AppGridPagingMode = "pagination" | "load-more" | "none";

export interface AppGridDataPage<TItem> {
  pageIndex: number;
  items: TItem[];
  pageSize: number;
  isLoading: boolean;
}

export interface AppGridData<TItem> {
  pages: AppGridDataPage<TItem>[];
  totalPageCount: number;
  totalItemCount: number;
  filterText?: string;
  placeholderFilterText?: string;
  sortBy?: number;
  pagingMode: AppGridPagingMode;
}

/**
 * Display mode for the grid.
 */
export type AppGridDisplayMode = "table" | "card";

/**
 * Cursor style for the grid's table and card display modes.
 */
export type AppGridCursorStyle<TItem> =
  | ((item: TItem, displayMode: AppGridDisplayMode) => CSS.Property.Cursor)
  | CSS.Property.Cursor;

/**
 * References for various components that may live outside of the grid.
 *
 * @param {HTMLElement} filterInputContainer Filter input container.
 * @param {HTMLElement} paginationContainer Pagination container.
 */
export interface AppGridComponentContainers {
  filterInputContainer?: HTMLElement | null;
  sortInputContainer?: HTMLElement | null;
  paginationContainer?: HTMLElement | null;
}

interface AppGridPropsBase<TItem> {
  tableView?: AppGridTableViewDefinitions<TItem>;
  cardView?: AppGridCardViewDefinitions<TItem>;
  displayMode: AppGridDisplayMode;
  cursorStyle?: AppGridCursorStyle<TItem>;
  hover?: boolean;
  pagination?: {
    pageSizeOptions?: number[];
    paginationTop?: boolean;
  };
  filterInputSx?: SxProps<Theme>;
  filterInputIcon?: React.ReactNode;
  sortInputSx?: SxProps<Theme>;
  sortItems?: SelectItem<number>[];
  defaultSortItem?: SelectItem<number>;
  componentContainers?: AppGridComponentContainers;
  noItemsMessage?: ReactNode;
  noItemsMessageSx?: SxProps<Theme>;
  onDataRequested?: (
    request: AppGridDataRequest,
    type: AppGridDataRequestChangeType
  ) => void;
  onItemClicked?: (item: TItem, displayMode: AppGridDisplayMode) => void;
}

export type AppGridProps<TItem> = AppGridPropsBase<TItem> & {
  data: AppGridData<TItem>;
};
