import { ReactNode } from 'react'
import {
  AppGridColumnDefinition,
  AppGridValueGetterProps,
} from '../AppGrid.props'

export interface ValueGetter<TItem> {
  column: AppGridColumnDefinition<TItem>
  getValue: (props: AppGridValueGetterProps<TItem>) => ReactNode
}
