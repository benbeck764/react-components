import { BoxProps } from '@mui/material'
import { ValueGetter } from '../AppGridTableView.props'
import { AppGridSkeletonRow } from './AppGridSkeletonRow'
import { AppGridRowProps } from './common'
import { StyledGridRow, StyledGridCell } from './row.styles'
import * as CSS from 'csstype'

export function AppGridRow<TItem>(
  props: AppGridRowProps<TItem>,
  rowPropsOverride?: BoxProps
): JSX.Element {
  const { item, itemIndex } = props
  if (!item) {
    return (
      <AppGridSkeletonRow
        tableViewDefinition={props.tableViewDefinition}
        itemIndex={itemIndex}
      />
    )
  }

  //   const virtualizedRow =
  //     props.tableViewDefinition.virtualizedProps?.enabled ?? false
  //   const [elementRef, handleFocus] = useFocusScroll<HTMLTableRowElement>(
  //     0,
  //     virtualizedRow
  //   )

  let cursorStyle: CSS.Property.Cursor = 'default'
  if (props.onItemClicked) {
    cursorStyle = 'pointer'
  }

  if (props.cursorStyle !== undefined) {
    if (typeof props.cursorStyle === 'function') {
      cursorStyle = props.cursorStyle(item, 'table')
    } else {
      cursorStyle = props.cursorStyle
    }
  }

  const bodyTableRowProps =
    typeof props.tableViewDefinition.bodyTableRowProps === 'function'
      ? props.tableViewDefinition.bodyTableRowProps(item, itemIndex)
      : props.tableViewDefinition.bodyTableRowProps

  const augmentedRowSx = {
    ...bodyTableRowProps?.sx,
    ...{ cursor: cursorStyle },
  }

  return (
    <StyledGridRow
      className="AppTableRow-row"
      //ref={elementRef}
      onClick={(event) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = event.target as unknown as any
        if (
          target?.nodeName === 'BUTTON' ||
          target?.offsetParent?.nodeName === 'BUTTON'
        )
          return
        props.onItemClicked?.(item, 'table')
      }}
      onKeyDown={(event: React.KeyboardEvent<HTMLTableRowElement>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = event.target as unknown as any
        if (
          target?.nodeName === 'BUTTON' ||
          target?.offsetParent?.nodeName === 'BUTTON'
        )
          return
        if (event.key === 'Enter') props.onItemClicked?.(item, 'table')
      }}
      {...bodyTableRowProps}
      {...rowPropsOverride}
      sx={augmentedRowSx}
      //onFocus={handleFocus}
    >
      {props.valueGetters.map((getter: ValueGetter<TItem>, index: number) => {
        const bodyCellProps =
          typeof getter.column.bodyCellProps === 'function'
            ? getter.column.bodyCellProps(props.item, props.itemIndex)
            : getter.column.bodyCellProps
        return (
          <StyledGridCell
            key={index}
            {...bodyCellProps}
            sx={{
              textAlign: getter.column.horizontalAlignment,
              width: getter.column.width,
              ...bodyCellProps?.sx,
            }}
          >
            {getter.getValue({
              item: item,
              itemIndex: props.itemIndex,
              filterText: props.filterText,
            })}
          </StyledGridCell>
        )
      })}
    </StyledGridRow>
  )
}
