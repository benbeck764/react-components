import {
  AppGridTableViewDefinition,
  AppGridDisplayMode,
  AppGridCursorStyle,
} from "../../AppGrid.props";
import { ValueGetter } from "../AppGridTableView.props";

export interface AppGridRowCommonProps<TItem> {
  tableViewDefinition: AppGridTableViewDefinition<TItem>;
  valueGetters: ValueGetter<TItem>[];
  itemIndex: number;
  itemCount: number;
  filterText: string | undefined;
  onItemClicked:
    | ((item: TItem, displayMode: AppGridDisplayMode) => void)
    | undefined;
  cursorStyle: AppGridCursorStyle<TItem> | undefined;
}

export interface AppGridRowProps<TItem> extends AppGridRowCommonProps<TItem> {
  item: TItem | undefined;
  previousItem: TItem | undefined;
}
