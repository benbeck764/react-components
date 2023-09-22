import {
  AppGridTableViewDefinition,
  AppGridColumnDefinition,
} from '../../AppGrid.props'
import { StyledGridRow, StyledGridCell } from './row.styles'

export function AppGridSkeletonRow<TItem>(props: {
  tableViewDefinition: AppGridTableViewDefinition<TItem>
  itemIndex: number
}): JSX.Element {
  return (
    <>
      <StyledGridRow
        {...(typeof props.tableViewDefinition.bodyTableRowProps === 'function'
          ? props.tableViewDefinition.bodyTableRowProps(undefined)
          : props.tableViewDefinition.bodyTableRowProps)}
      >
        {props.tableViewDefinition.columns.map(
          (col: AppGridColumnDefinition<TItem>, index: number) => {
            const bodyCellProps =
              typeof col.bodyCellProps === 'function'
                ? col.bodyCellProps(undefined, props.itemIndex)
                : col.bodyCellProps
            return (
              <StyledGridCell
                key={index}
                {...bodyCellProps}
                sx={{
                  textAlign: col.horizontalAlignment,
                  width: col.width,
                  ...bodyCellProps?.sx,
                }}
              >
                {typeof col.loadingPlaceholder === 'function'
                  ? col.loadingPlaceholder(col, props.itemIndex)
                  : col.loadingPlaceholder || ''}
              </StyledGridCell>
            )
          }
        )}
      </StyledGridRow>
    </>
  )
}
