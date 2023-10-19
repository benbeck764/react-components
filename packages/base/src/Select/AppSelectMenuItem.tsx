"use client";
import { SxProps, Theme } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { StyledMenuItem } from "./AppSelect.styles";
import { SelectItem } from "./SelectItem";

export type AppSelectMenuItemProps<TItem> = {
  onSelect?: (value: SelectItem<TItem> | undefined) => void;
  item: SelectItem<TItem>;
  sx?: SxProps<Theme>;
};

function AppSelectMenuItem<TItem>(
  props: PropsWithChildren<AppSelectMenuItemProps<TItem>>
) {
  const { onSelect, item, sx } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    const key = event.key;
    if (key === "Enter") {
      onSelect?.(item);
      event.preventDefault();
    }
  };

  const handleClick = () => {
    onSelect?.(item);
  };

  return (
    <StyledMenuItem
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      sx={sx}
    >
      {props.children}
    </StyledMenuItem>
  );
}

export default AppSelectMenuItem;
