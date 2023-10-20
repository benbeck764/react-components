"use client";
import { FC, PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppMenu, AppMenuDividerVariant, AppMenuMode } from "../Menu/AppMenu";
import { PopperPlacementType } from "@mui/material/Popper";

export type AppEllipsisMenuProps = {
  mode: AppMenuMode;
  iconSize: "small" | "inherit" | "medium" | "large";
  menuWidth?: number;
  dividerVariant?: AppMenuDividerVariant;
  placement?: PopperPlacementType;
  disablePortal?: boolean;
  popperSx?: SxProps<Theme>;
  buttonSx?: SxProps<Theme>;
};

const AppEllipsisMenu: FC<PropsWithChildren<AppEllipsisMenuProps>> = (
  props: PropsWithChildren<AppEllipsisMenuProps>
) => {
  const {
    children,
    iconSize,
    placement,
    disablePortal,
    popperSx,
    buttonSx,
    ...rest
  } = props;

  return (
    <>
      <AppMenu
        {...rest}
        listProps={{ style: { padding: 0 } }}
        buttonProps={{
          variant: "text",
          disableElevation: true,
          children: <MoreVertIcon fontSize={iconSize} />,
          sx: { ...buttonSx },
        }}
        popperProps={{
          disablePortal: disablePortal,
          placement: placement ?? "bottom",
          open: false,
        }}
        popperSx={popperSx}
      >
        {children}
      </AppMenu>
    </>
  );
};

export default AppEllipsisMenu;
