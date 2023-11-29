import { AppGridProps, AppGridRowType, AppRowData } from "../../AppGrid.props";
import { AppGridCardRow } from "../row/AppGridCardRow";
import { AppGridCardRowSkeleton } from "../row/AppGridCardRowSkeleton";
import { AppGridCardRowBaseProps } from "../row/common";

export function getCardRowData<TItem>(
  baseProps: AppGridCardRowBaseProps<TItem>,
  items: (TItem | undefined)[],
  dataGridProps: AppGridProps<TItem>,
  type: AppGridRowType
): AppRowData | undefined {
  if (items.length <= 0) return;

  if (type === "card-row") {
    return {
      type: "card-row",
      content: (
        <AppGridCardRow
          baseProps={baseProps}
          items={items}
          dataGridProps={dataGridProps}
        />
      ),
    } as AppRowData;
  } else {
    return {
      type: "row-skeleton",
      content: <AppGridCardRowSkeleton baseProps={baseProps} items={items} />,
    } as AppRowData;
  }
}
