"use client";
import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import {
  StyledButton,
  StyledList,
  StyledPanelBox,
  StyledDrawer,
} from "./AppDrawer.styles";
import { CloseButton } from "../common";
import { DrawerProps } from "@mui/material/Drawer";
import { ButtonProps } from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

export type AppDrawerMode = "menu" | "panel";

export interface AppDrawerProps {
  mode: AppDrawerMode;
  displayDividers?: boolean;
  closeOnSelect?: boolean;
  buttonProps?: ButtonProps;
  drawerProps?: DrawerProps;
  displayAboveHeader?: boolean;
  forcedToggleState?: boolean;
  listProps?: React.ButtonHTMLAttributes<HTMLUListElement>;
  panelSx?: SxProps<Theme>;
  prefix?: ReactNode | string;
  closeButtonContainer?: HTMLElement | null;
  onDrawerOpen?: () => void;
}

const AppDrawer: FC<PropsWithChildren<AppDrawerProps>> = (
  props: PropsWithChildren<AppDrawerProps>
) => {
  const {
    children,
    mode,
    displayDividers,
    closeOnSelect,
    buttonProps,
    drawerProps,
    displayAboveHeader,
    forcedToggleState,
    listProps,
    panelSx,
    prefix,
    closeButtonContainer,
    onDrawerOpen,
  } = props;

  const [open, setOpen] = useState<boolean>(
    typeof forcedToggleState !== "undefined" ? forcedToggleState : false
  );

  useEffect(() => {
    if (typeof forcedToggleState !== "undefined") {
      setOpen(forcedToggleState);
    }
  }, [forcedToggleState]);

  const handleClose = (
    event: React.KeyboardEvent | React.MouseEvent,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(false);
    props?.drawerProps?.onClose?.(event, reason);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    buttonProps?.onClick?.(event);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  const buttonPropsAugmented = { ...buttonProps };
  buttonPropsAugmented.onClick = handleClick;

  const numChildren = React.Children.count(children);

  const closeButton = (
    <CloseButton
      aria-label="close"
      edge="end"
      fontSize="medium"
      sx={{ color: (theme: Theme) => theme.palette.coolGrey[600] }}
      onClick={() => setOpen(false)}
    />
  );

  return (
    <>
      {closeButtonContainer &&
        ReactDOM.createPortal(closeButton, closeButtonContainer)}
      {buttonProps && (
        <StyledButton {...buttonPropsAugmented}>
          {buttonProps?.children}
        </StyledButton>
      )}

      <StyledDrawer
        displayAboveHeader={displayAboveHeader}
        {...drawerProps}
        open={open}
        onClose={handleClose}
        SlideProps={{
          addEndListener: () => {
            if (open) {
              onDrawerOpen?.();
            }
          },
        }}
      >
        {mode === "menu" && (
          <StyledList
            sx={
              displayAboveHeader
                ? {}
                : {
                    marginBottom: (theme) =>
                      `${theme.headerHeights?.[`xs`]}px` ?? 0,
                  }
            }
            {...listProps}
          >
            <>
              {prefix && prefix}
              {React.Children.map(children, (child, index) => {
                return (
                  <>
                    {closeOnSelect === true && (
                      <ListItem
                        disableGutters
                        onClick={handleItemClick}
                        sx={{ display: "list-item", py: 0 }}
                      >
                        {child}
                      </ListItem>
                    )}
                    {closeOnSelect !== true && <li>{child}</li>}
                    {displayDividers === true && index < numChildren - 1 && (
                      <Box sx={{ padding: "0px 16px" }}>
                        <Divider variant="fullWidth" />
                      </Box>
                    )}
                  </>
                );
              })}
            </>
          </StyledList>
        )}
        {mode === "panel" && (
          <StyledPanelBox sx={panelSx}>
            <>
              {prefix && prefix}
              {children}
            </>
          </StyledPanelBox>
        )}
      </StyledDrawer>
    </>
  );
};

export default AppDrawer;
