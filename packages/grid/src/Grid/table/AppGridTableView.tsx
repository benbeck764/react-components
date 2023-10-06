import { Box } from "@mui/material";
import { AppBreakpoint } from "@benbeck764/react-components-common";
import {
  AppGridColumnDefinition,
  AppGridProps,
  AppGridTableViewDefinition,
} from "../AppGrid.props";
import { getPropertyByBreakpoint } from "../utility/grid-breakpoint";
import {
  StyledGridHeaderCell,
  StyledGridHeaderContainer,
  StyledGridHeaderRow,
  StyledTableContainer,
} from "./AppGridTableView.styles";
import { AppGridTableViewBody } from "./body/AppGridTableViewBody";
import { AppGridTableViewVirtualizedBody } from "./body/AppGridTableViewVirtualizedBody";

export function AppGridTableView<TItem>(props: {
  dataGridProps: AppGridProps<TItem>;
  breakpointProperties: AppBreakpoint;
}): JSX.Element {
  if (!props.dataGridProps.tableView) return <></>;

  const breakpoint = props.breakpointProperties.breakpoint;
  const tableViewDefinition = getPropertyByBreakpoint<
    AppGridTableViewDefinition<TItem>
  >(props.dataGridProps.tableView, breakpoint);

  const tableHeadContent = tableViewDefinition.customHeader ? (
    tableViewDefinition.customHeader
  ) : (
    <AppGridTableViewHeader tableViewDefinition={tableViewDefinition} />
  );

  const tableHead = (
    <Box sx={tableViewDefinition.tableHeadContainerSx}>{tableHeadContent}</Box>
  );

  return (
    <StyledTableContainer>
      <Box {...tableViewDefinition.tableProps}>
        {tableHead}

        {tableViewDefinition.virtualizedProps ? (
          <AppGridTableViewVirtualizedBody
            dataGridProps={props.dataGridProps}
            tableViewDefinition={tableViewDefinition}
          />
        ) : (
          <AppGridTableViewBody
            dataGridProps={props.dataGridProps}
            tableViewDefinition={tableViewDefinition}
          />
        )}
      </Box>
    </StyledTableContainer>
  );
}

function AppGridTableViewHeader<TItem>(props: {
  tableViewDefinition: AppGridTableViewDefinition<TItem>;
}): JSX.Element {
  return (
    <StyledGridHeaderContainer
      sx={{
        visibility: props.tableViewDefinition.showHeader ? "visible" : "hidden",
        ...props.tableViewDefinition.tableHeadSx,
      }}
    >
      <StyledGridHeaderRow sx={{ height: "inherit" }}>
        {props.tableViewDefinition.columns.map(
          (col: AppGridColumnDefinition<TItem>, index: number) => (
            <StyledGridHeaderCell
              key={index}
              {...col.headerCellProps}
              sx={{
                width: col.width,
                textAlign: col.horizontalAlignment,
                ...(props.tableViewDefinition.showHeader
                  ? {}
                  : { paddingY: 0, maxHeight: 0 }),
                ...col.headerCellProps?.sx,
              }}
            >
              {props.tableViewDefinition.showHeader && col.title}
            </StyledGridHeaderCell>
          )
        )}
      </StyledGridHeaderRow>
    </StyledGridHeaderContainer>
  );
}
