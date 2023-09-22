import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import {
  Box,
  ButtonProps,
  Divider,
  DrawerProps,
  SxProps,
  Theme,
} from "@mui/material";
import {
  StyledButton,
  StyledList,
  StyledPanelBox,
  StyledDrawer,
} from "./AppDrawer.styles";
import { CloseButton } from "@common";

export type AppDrawerMode = "menu" | "panel";

export interface AppDrawerProps {
  mode: AppDrawerMode;
  displayDividers?: boolean;
  closeOnSelect?: boolean;
  buttonProps?: ButtonProps;
  drawerProps?: DrawerProps;
  displayAboveHeader?: boolean;
  forcedToggleState?: boolean;
  onDrawerOpen?: () => void;
  listProps?: React.ButtonHTMLAttributes<HTMLUListElement>;
  panelSx?: SxProps<Theme>;
  prefix?: ReactNode | string;
  closeButtonContainer?: HTMLElement | null;
}

export const AppDrawer: FC<PropsWithChildren<AppDrawerProps>> = (
  props: PropsWithChildren<AppDrawerProps>
) => {
  const [open, setOpen] = useState<boolean>(
    typeof props.forcedToggleState !== "undefined"
      ? props.forcedToggleState
      : false
  );

  useEffect(() => {
    if (typeof props.forcedToggleState !== "undefined") {
      setOpen(props.forcedToggleState);
    }
  }, [props.forcedToggleState]);

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
    props.buttonProps?.onClick?.(event);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  const buttonPropsAugmented = { ...props.buttonProps };
  buttonPropsAugmented.onClick = handleClick;

  const numChildren = React.Children.count(props.children);

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
      {props.closeButtonContainer &&
        ReactDOM.createPortal(closeButton, props.closeButtonContainer)}
      {props.buttonProps && (
        <StyledButton {...buttonPropsAugmented}>
          {props.buttonProps?.children}
        </StyledButton>
      )}

      <StyledDrawer
        displayAboveHeader={props.displayAboveHeader}
        {...props.drawerProps}
        open={open}
        onClose={handleClose}
        SlideProps={{
          addEndListener: () => {
            if (open) {
              props.onDrawerOpen?.();
            }
          },
        }}
      >
        {props.mode === "menu" && (
          <StyledList
            sx={
              props.displayAboveHeader
                ? {}
                : {
                    marginBottom: (theme) =>
                      `${theme.custom.headerHeights[`xs`]}px`,
                  }
            }
            {...props.listProps}
          >
            <>
              {props.prefix && props.prefix}
              {React.Children.map(props.children, (child, index) => {
                return (
                  <>
                    {props.closeOnSelect === true && (
                      <li onClick={handleItemClick}>{child}</li>
                    )}
                    {props.closeOnSelect !== true && <li>{child}</li>}
                    {props.displayDividers === true &&
                      index < numChildren - 1 && (
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
        {props.mode === "panel" && (
          <StyledPanelBox sx={props.panelSx}>
            <>
              {props.prefix && props.prefix}
              {props.children}
            </>
          </StyledPanelBox>
        )}
      </StyledDrawer>
    </>
  );
};
