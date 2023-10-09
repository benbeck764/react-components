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
  const anchorRef = (props.popperProps?.anchorEl as HTMLElement) ?? null;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const buttonRef = useRef<any>(null);

  const numChildren = React.Children.count(props.children);
  const buttonWidth = buttonAnchor?.offsetWidth ?? 0;
  const width =
    props.menuWidth ?? buttonWidth * (props.menuWidthRelativeToInput ?? 1);

  let arrowSX = {};
  if (props.popperProps?.placement === "bottom") {
    arrowSX = { left: width / 2 - 10 };
  } else if (props.popperProps?.placement === "bottom-start") {
    arrowSX = { left: buttonWidth / 2 };
  } else if (props.popperProps?.placement === "bottom-end") {
    arrowSX = { left: width - buttonWidth / 2 - 10 };
  }

  useEffect(() => {
    if (buttonAnchor && numChildren > 0 && listRef.current)
      listRef.current.focus({ preventScroll: true });
  }, [buttonAnchor]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (props.stopPropagation) event.stopPropagation();

    if (buttonAnchor != null) {
      handleMenuClose();
    } else {
      handleMenuOpen(event.currentTarget);
    }
    if (props.onButtonClick) {
      props.onButtonClick(event);
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
      if (props.stopPropagation && event) event.stopPropagation();
      handleMenuClose();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLUListElement>
  ): void => {
    if (props.stopPropagation) event.stopPropagation();
    if (
      props.mode === "menu" &&
      props.closeOnSelect === true &&
      event.key === "Enter"
    )
      handleMenuClose();
    if (event.key === "Escape") handleMenuClose();
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    if (props.stopPropagation) event.stopPropagation();
  };

  const handleMenuClose = () => {
    setButtonAnchor(null);
    if (props.onMenuClose) {
      props.onMenuClose();
    }
  };

  const handleMenuOpen = (target: EventTarget) => {
    if (props.disabled) return;

    setButtonAnchor(anchorRef ?? target);
    props.onMenuOpen?.();
  };

  const buttonPropsAugmented = {
    ...props.buttonProps,
    disabled: props.disabled,
  };
  buttonPropsAugmented.onClick = handleClick;

  const menuOpen = numChildren > 0 && Boolean(buttonAnchor);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <Tooltip title={props.toolTipTitle} disableHoverListener={menuOpen}>
          <AppButton {...buttonPropsAugmented} onKeyDown={handleButtonKeyDown}>
            {props.buttonProps?.children}
            {props.displayCaret &&
              (buttonAnchor ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              ))}
          </AppButton>
        </Tooltip>

        <Fade in={menuOpen}>
          <StyledPopper
            {...props.popperProps}
            anchorEl={buttonAnchor}
            keepMounted
            disablePortal={props.disablePortal ?? false}
            open={menuOpen}
            sx={{ width: width ?? "unset", ...props.popperSx }}
            modifiers={[
              {
                name: "arrow",
                enabled: Boolean(props.displayArrow),
                options: {
                  element: arrowRef,
                },
              },
              {
                name: "offset",
                enabled: Boolean(props.displayArrow),
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
            {props.displayArrow && (
              <StyledPopperArrow
                ref={setArrowRef}
                sx={{
                  "::before": {
                    ...arrowSX,
                  },
                }}
              />
            )}

            {props.mode === "menu" && (
              <StyledContainerMenu
                {...props.listProps}
                onKeyDown={handleKeyDown}
                ref={listRef}
                tabIndex={0}
              >
                {React.Children.map(props.children, (child, index) => {
                  return (
                    <>
                      {props.closeOnSelect === true && (
                        <li onClick={handleItemClick}>{child}</li>
                      )}
                      {props.closeOnSelect !== true && <li>{child}</li>}
                      {props.displayDividers === true &&
                        index < numChildren - 1 && (
                          <Box
                            sx={{
                              padding:
                                props.dividerVariant === "flush"
                                  ? ""
                                  : "0px 16px",
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
            {props.mode === "panel" && (
              <StyledContainerPanel ref={listRef} tabIndex={0}>
                {props.children}
              </StyledContainerPanel>
            )}
          </StyledPopper>
        </Fade>
      </Box>
    </ClickAwayListener>
  );
};

export default AppMenu;
