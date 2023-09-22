import { AppGridRowType } from '../../AppGrid.props'
import { AppGridRow } from './AppGridRow'
import { AppGridSkeletonRow } from './AppGridSkeletonRow'
import { AppGridRowProps } from './common'

interface RowWrappersProps<TItem> {
  rowProps: AppGridRowProps<TItem>
  rowType: AppGridRowType
}

export function RowWrappers<TItem>(
  props: RowWrappersProps<TItem>
): JSX.Element | null {
  const { rowProps, rowType } = props

  const item = rowProps.item
  if (!item) {
    return (
      <AppGridSkeletonRow
        tableViewDefinition={rowProps.tableViewDefinition}
        itemIndex={rowProps.itemIndex}
      />
    )
  }

  switch (rowType) {
    case 'row':
      return <AppGridRow {...rowProps} />
    case 'row-skeleton':
      return (
        <AppGridSkeletonRow
          tableViewDefinition={rowProps.tableViewDefinition}
          itemIndex={rowProps.itemIndex}
        />
      )
    default:
      return null
  }
}
