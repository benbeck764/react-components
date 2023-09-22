import { FC, PropsWithChildren } from 'react'
import {
  SxProps,
  Theme,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material'

export const AppToggleButtonGroup: FC<
  PropsWithChildren<ToggleButtonGroupProps>
> = (props: PropsWithChildren<ToggleButtonGroupProps>) => {
  const { children, ...toggleButtonGroupProps } = props

  return (
    <ToggleButtonGroup {...toggleButtonGroupProps}>
      {children}
    </ToggleButtonGroup>
  )
}

type AppToggleButtonProps = {
  value: string
  sx?: SxProps<Theme>
}

export const AppToggleButton: FC<PropsWithChildren<AppToggleButtonProps>> = (
  props: PropsWithChildren<AppToggleButtonProps>
) => {
  const { children, ...toggleButtonProps } = props
  return <ToggleButton {...toggleButtonProps}>{children}</ToggleButton>
}
