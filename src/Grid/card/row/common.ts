import { AppGridCardViewDefinition } from "../../AppGrid.props";

export type AppGridCardRowBaseProps<TItem> = {
  rowIndex: number;
  cardViewDefinition: AppGridCardViewDefinition<TItem>;
};
