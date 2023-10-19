"use client";
import { FC, PropsWithChildren } from "react";
import { Theme, SxProps } from "@mui/material/styles";
import {
  StyledHeaderMenuItem,
  StyledDisabledMenuItem,
  StyledMenuItem,
} from "./AppMenuItem.styles";
import Tooltip from "@mui/material/Tooltip";

export type AppMenuItemProps = {
  header?: boolean;
  disabled?: boolean;
  disabledTooltipTitle?: string;
  sx?: SxProps<Theme>;
  onSelect?: (value: unknown | undefined) => void;
  value?: unknown;
  selected?: boolean;
};

const AppMenuItem: FC<PropsWithChildren<AppMenuItemProps>> = (
  props: PropsWithChildren<AppMenuItemProps>
) => {
  const {
    onSelect,
    header,
    disabled,
    disabledTooltipTitle,
    selected,
    ...rest
  } = {
    ...props,
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    const key = event.key;
    if (key === "Enter") {
      onSelect?.(props.value);
      event.preventDefault();
    }
  };

  const handleClick = () => {
    onSelect?.(props.value);
  };

  if (header) {
    return (
      <StyledHeaderMenuItem {...rest}>{props.children}</StyledHeaderMenuItem>
    );
  }

  if (disabled && disabledTooltipTitle)
    return (
      <Tooltip title={disabledTooltipTitle} placement="left">
        <StyledDisabledMenuItem {...rest}>
          {props.children}
        </StyledDisabledMenuItem>
      </Tooltip>
    );

  if (disabled)
    return (
      <StyledDisabledMenuItem {...rest}>
        {props.children}
      </StyledDisabledMenuItem>
    );

  return (
    <StyledMenuItem
      {...rest}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      $selected={selected}
    >
      {props.children}
    </StyledMenuItem>
  );
};

export default AppMenuItem;
