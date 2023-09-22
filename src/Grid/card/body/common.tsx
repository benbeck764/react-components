import { AppGridProps, AppRowData } from "../../AppGrid.props";
import { AppGridCardRow } from "../row/AppGridCardRow";
import { AppGridCardRowBaseProps } from "../row/common";

export function getCardRowData<TItem>(
  baseProps: AppGridCardRowBaseProps<TItem>,
  items: (TItem | undefined)[],
  dataGridProps: AppGridProps<TItem>
): AppRowData | undefined {
  if (items.length <= 0) return;
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
}
