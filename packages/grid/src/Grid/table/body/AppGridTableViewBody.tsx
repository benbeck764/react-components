import { AppGridProps, AppGridTableViewDefinition } from "../../AppGrid.props";
import { AppGridNoResultsFound } from "../../common/AppGridNoResultsFound";
import { getHasItems, getItems } from "../../utility/grid-helpers";
import { AppGridRow } from "../rows/AppGridRow";
import { StyledGridBody } from "./body.styles";
import { createValueGetters } from "./common";

export function AppGridTableViewBody<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  tableViewDefinition: AppGridTableViewDefinition<TItem>;
}): JSX.Element {
  const valueGetters = createValueGetters(props.tableViewDefinition.columns);

  const dataGridProps = props.dataGridProps;

  if (!getHasItems(dataGridProps)) {
    return (
      <StyledGridBody>
        <AppGridNoResultsFound
          message={props.dataGridProps.noItemsMessage}
          sx={props.dataGridProps.noItemsMessageSx}
          displayMode="table"
        />
      </StyledGridBody>
    );
  } else {
    const items = getItems(dataGridProps.data);
    const itemCount = items.filter(
      (i: { item: TItem | undefined; isLoading: boolean }) => !i.isLoading
    ).length;
    return (
      <StyledGridBody sx={props.tableViewDefinition.tableBodySx}>
        {items.map(
          (
            {
              item,
            }: {
              item: TItem | undefined;
              isLoading: boolean;
            },
            index: number
          ) => (
            <AppGridRow
              key={index}
              item={item}
              previousItem={items[index - 1]?.item}
              valueGetters={valueGetters}
              tableViewDefinition={props.tableViewDefinition}
              itemIndex={index}
              itemCount={itemCount}
              onItemClicked={dataGridProps.onItemClicked}
              cursorStyle={dataGridProps.cursorStyle}
              filterText={dataGridProps.data.filterText}
            />
          )
        )}
      </StyledGridBody>
    );
  }
}
