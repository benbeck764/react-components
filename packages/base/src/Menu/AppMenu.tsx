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
import {
  StyledContainerMenu,
  StyledContainerPanel,
  StyledPopper,
  StyledPopperArrow,
} from "./AppMenu.styles";
import AppButton from "../Button/AppButton";
import { SxProps, Theme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import { PopperProps } from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";

export type AppMenuMode = "menu" | "panel";
export type AppMenuDividerVariant = "flush" | undefined;

export interface AppMenuProps {
  mode: AppMenuMode;
  displayCaret?: boolean;
  displayDividers?: boolean;
  displayArrow?: boolean;
  closeOnSelect?: boolean;
  toolTipTitle?: string;
  buttonProps?: ButtonProps;
  popperProps?: PopperProps;
  menuWidthRelativeToInput?: number;
  menuWidth?: number;
  listProps?: React.ButtonHTMLAttributes<HTMLUListElement>;
  stopPropagation?: boolean;
  dividerVariant?: AppMenuDividerVariant;
  popperSx?: SxProps<Theme>;
  fullWidth?: boolean;
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
    displayArrow,
    closeOnSelect = true,
    toolTipTitle,
    buttonProps,
    popperProps,
    menuWidthRelativeToInput = 1,
    menuWidth,
    listProps,
    stopPropagation,
    dividerVariant,
    popperSx,
    fullWidth,
    disablePortal,
    disabled,
    onButtonClick,
    onMenuClose,
    onMenuOpen,
  } = props;
  const [buttonAnchor, setButtonAnchor] = useState<null | HTMLElement>(null);
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const anchorRef = (popperProps?.anchorEl as HTMLElement) ?? null;

  const numChildren = React.Children.count(children);
  const buttonWidth = buttonAnchor?.offsetWidth ?? 0;
  const width = menuWidth ?? buttonWidth * (menuWidthRelativeToInput ?? 1);

  let arrowSX = {};
  if (popperProps?.placement === "bottom") {
    arrowSX = { left: width / 2 - 10 };
  } else if (popperProps?.placement === "bottom-start") {
    arrowSX = { left: buttonWidth / 2 };
  } else if (popperProps?.placement === "bottom-end") {
    arrowSX = { left: width - buttonWidth / 2 - 10 };
  }

  useEffect(() => {
    if (buttonAnchor && numChildren > 0 && listRef.current)
      listRef.current.focus({ preventScroll: true });
  }, [buttonAnchor]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (stopPropagation) event.stopPropagation();

    if (buttonAnchor != null) {
      handleMenuClose();
    } else {
      handleMenuOpen(event.currentTarget);
    }
    if (onButtonClick) {
      onButtonClick(event);
    }
  };

  const handleClickAway = () => {
    if (buttonAnchor != null) {
      handleMenuClose();
    }
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLLIElement> | undefined
  ) => {
    if (buttonAnchor != null) {
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

  const handleMenuClose = () => {
    setButtonAnchor(null);
    if (onMenuClose) {
      onMenuClose();
    }
  };

  const handleMenuOpen = (target: EventTarget) => {
    if (disabled) return;

    setButtonAnchor(anchorRef ?? target);
    onMenuOpen?.();
  };

  const buttonPropsAugmented = {
    ...buttonProps,
    disabled: disabled,
  };
  buttonPropsAugmented.onClick = handleClick;

  const menuOpen = numChildren > 0 && Boolean(buttonAnchor);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <Tooltip title={toolTipTitle} disableHoverListener={menuOpen}>
          <AppButton {...buttonPropsAugmented} onKeyDown={handleButtonKeyDown}>
            {buttonProps?.children}
            {displayCaret &&
              (buttonAnchor ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              ))}
          </AppButton>
        </Tooltip>

        <Fade in={menuOpen}>
          <StyledPopper
            {...popperProps}
            anchorEl={buttonAnchor}
            keepMounted
            disablePortal={disablePortal ?? false}
            open={menuOpen}
            sx={{ width: width ?? "unset", ...popperSx }}
            modifiers={[
              {
                name: "arrow",
                enabled: Boolean(displayArrow),
                options: {
                  element: arrowRef,
                },
              },
              {
                name: "offset",
                enabled: Boolean(displayArrow),
                options: { offset: [0, 22] },
              },
              {
                name: "preventOverflow",
                enabled: true,
                options: {
                  rootBoundary: "window",
                },
              },
            ]}
          >
            {displayArrow && (
              <StyledPopperArrow
                ref={setArrowRef}
                sx={{
                  "::before": {
                    ...arrowSX,
                  },
                }}
              />
            )}

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
                      {closeOnSelect === true && (
                        <li onClick={handleItemClick}>{child}</li>
                      )}
                      {closeOnSelect !== true && <li>{child}</li>}
                      {displayDividers === true && index < numChildren - 1 && (
                        <Box
                          sx={{
                            padding:
                              dividerVariant === "flush" ? "" : "0px 16px",
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
          </StyledPopper>
        </Fade>
      </Box>
    </ClickAwayListener>
  );
};

export default AppMenu;
