import { ReactNode } from "react";

export type SelectItem<TItem> = {
  value: string;
  label: ReactNode | string;
  item: TItem;
};
