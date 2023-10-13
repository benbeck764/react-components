import { AppGridCardViewDefinition } from "../../AppGrid.props";

export type AppGridCardRowBaseProps<TItem> = {
  rowIndex: number;
  lastRow: boolean;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
};
