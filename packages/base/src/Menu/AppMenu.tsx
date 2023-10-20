"use client";
import React, {
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
} from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledContainerMenu, StyledContainerPanel } from "./AppMenu.styles";
import AppButton from "../Button/AppButton";
import { SxProps, Theme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import Popper, { PopperProps } from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

export type AppMenuMode = "menu" | "panel";
export type AppMenuDividerVariant = "flush" | undefined;

export interface AppMenuProps {
  mode: AppMenuMode;
  displayCaret?: boolean;
  displayDividers?: boolean;
  closeOnSelect?: boolean;
  toolTipTitle?: string;
  buttonProps?: ButtonProps;
  popperProps?: PopperProps;
  menuWidthRelativeToInput?: number;
  menuWidth?: number;
  forcedToggleState?: boolean;
  listProps?: React.ButtonHTMLAttributes<HTMLUListElement>;
  stopPropagation?: boolean;
  dividerVariant?: AppMenuDividerVariant;
  popperSx?: SxProps<Theme>;
  disablePortal?: boolean;
  disabled?: boolean;
  onButtonClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const AppMenu: FC<PropsWithChildren<AppMenuProps>> = (
  props: PropsWithChildren<AppMenuProps>
) => {
  const {
    children,
    mode = "menu",
    displayCaret = false,
    displayDividers = true,
    closeOnSelect = true,
    toolTipTitle,
    buttonProps,
    popperProps,
    menuWidthRelativeToInput = 1,
    menuWidth,
    forcedToggleState,
    listProps,
    stopPropagation,
    dividerVariant,
    popperSx,
    disablePortal,
    disabled,
    onButtonClick,
    onMenuClose,
    onMenuOpen,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const anchorRef = (popperProps?.anchorEl as HTMLElement) ?? null;
  const buttonRef = useRef<any>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const numChildren = React.Children.count(children);
  const buttonWidth = anchorEl?.offsetWidth ?? 0;
  const width = menuWidth ?? buttonWidth * (menuWidthRelativeToInput ?? 1);

  useEffect(() => {
    if (anchorEl && numChildren > 0 && listRef.current)
      listRef.current.focus({ preventScroll: true });
  }, [anchorEl]);

  useEffect(() => {
    if (typeof forcedToggleState !== "undefined") {
      if (forcedToggleState) {
        handleMenuOpen(buttonRef?.current);
      } else {
        handleMenuClose();
      }
    }
  }, [forcedToggleState]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (stopPropagation) event.stopPropagation();

    setAnchorEl(event.currentTarget);
    onButtonClick?.(event);
  };

  const handleMenuOpen = (target: EventTarget) => {
    if (disabled) return;

    setAnchorEl(anchorRef ?? target);
    onMenuOpen?.();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    onMenuClose?.();
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLLIElement> | undefined
  ) => {
    if (anchorEl != null) {
      if (stopPropagation && event) event.stopPropagation();
      handleMenuClose();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLUListElement>
  ): void => {
    if (stopPropagation) event.stopPropagation();
    if (mode === "menu" && closeOnSelect === true && event.key === "Enter")
      handleMenuClose();
    if (event.key === "Escape") handleMenuClose();
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    if (stopPropagation) event.stopPropagation();
  };

  const buttonPropsAugmented = {
    ...buttonProps,
    disabled: disabled,
  };
  buttonPropsAugmented.onClick = handleClick;

  const menuOpen = numChildren > 0 && Boolean(anchorEl);

  return (
    <Box>
      <Tooltip title={toolTipTitle} disableHoverListener={menuOpen}>
        <AppButton
          {...buttonPropsAugmented}
          onKeyDown={handleButtonKeyDown}
          ref={buttonRef}
        >
          {buttonProps?.children}
          {displayCaret &&
            (anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
        </AppButton>
      </Tooltip>

      <Popper
        {...popperProps}
        open={menuOpen}
        anchorEl={anchorEl}
        disablePortal={disablePortal ?? false}
        keepMounted
        sx={{
          zIndex: (theme) => theme.zIndex.tooltip,
          backgroundColor: (theme) => theme.palette.common.white,
          border: (theme) => `1px solid ${theme.palette.coolGrey[200]}`,
          borderRadius: "8px",
          boxSizing: "border-box",
          boxShadow: "none",
          width: width ?? "unset",
          ...popperSx,
        }}
        modifiers={[
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              rootBoundary: "window",
            },
          },
        ]}
      >
        {mode === "menu" && (
          <StyledContainerMenu
            {...listProps}
            onKeyDown={handleKeyDown}
            ref={listRef}
            tabIndex={0}
          >
            {React.Children.map(children, (child, index) => {
              return (
                <>
                  <li
                    onClick={closeOnSelect === true ? handleItemClick : void 0}
                  >
                    {child}
                  </li>
                  {displayDividers === true && index < numChildren - 1 && (
                    <Box
                      sx={{
                        padding: dividerVariant === "flush" ? "" : "0px 16px",
                      }}
                    >
                      <Divider variant="fullWidth" />
                    </Box>
                  )}
                </>
              );
            })}
          </StyledContainerMenu>
        )}
        {mode === "panel" && (
          <StyledContainerPanel ref={listRef} tabIndex={0}>
            {children}
          </StyledContainerPanel>
        )}
      </Popper>
    </Box>
  );
};

export default AppMenu;
