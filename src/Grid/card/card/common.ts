import {
  AppGridDisplayMode,
  AppGridCardViewDefinition,
  AppGridCursorStyle,
} from "../../AppGrid.props";

export interface AppGridCardCommonProps<TItem> {
  onItemClicked:
    | ((item: TItem, displayMode: AppGridDisplayMode) => void)
    | undefined;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
  index: number;
  hover?: boolean;
  cursorStyle: AppGridCursorStyle<TItem> | undefined;
}
