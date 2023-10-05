import { Box } from "@mui/material";
import { AppGridCardViewDefinition, AppGridProps } from "../AppGrid.props";
import { AppBreakpoint } from "@benbeck764/react-components-common";
import { getPropertyByBreakpoint } from "../utility/grid-breakpoint";
import { AppGridCardViewBody } from "./body/AppGridCardViewBody";
import { AppGridCardViewVirtualizedBody } from "./body/AppGridVirtualizedCardViewBody";

export function AppGridCardView<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  breakpointProperties: AppBreakpoint;
}): JSX.Element {
  if (!props.dataGridProps.cardView) return <></>;

  const breakpoint = props.breakpointProperties.breakpoint;
  const cardViewDefinition = getPropertyByBreakpoint<
    AppGridCardViewDefinition<TItem>
  >(props.dataGridProps.cardView, breakpoint);

  return (
    <Box {...cardViewDefinition.gridProps}>
      {cardViewDefinition.virtualizedProps ? (
        <AppGridCardViewVirtualizedBody
          dataGridProps={props.dataGridProps}
          cardViewDefinition={cardViewDefinition}
        />
      ) : (
        <AppGridCardViewBody
          dataGridProps={props.dataGridProps}
          cardViewDefinition={cardViewDefinition}
        />
      )}
    </Box>
  );
}
