"use client";
import { FC, PropsWithChildren } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { StyledToastBox, StyledSnackbar } from "./AppToast.styles";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { SxProps, Theme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

export type AppToastProps = {
  open: boolean;
  message: string;
  onClose?: () => void;
  variant?: "primary" | "success" | "warning" | "error";
  icon?: React.ReactElement<SvgIconProps>;
  sx?: SxProps<Theme>;
};

const AppToast: FC<PropsWithChildren<AppToastProps>> = (
  props: PropsWithChildren<AppToastProps>
) => {
  const setBackgroundColor = (theme: Theme) => {
    let backgroundColor = undefined;
    switch (props.variant) {
      case "primary":
        backgroundColor = theme.palette?.primary.main;
        break;
      case "success":
        backgroundColor = theme.palette?.success?.main;
        break;
      case "warning":
        backgroundColor = theme.palette?.warning?.main;
        break;
      case "error":
        backgroundColor = theme.palette?.error?.main;
        break;
      default:
        break;
    }
    return backgroundColor;
  };

  return (
    <StyledSnackbar
      open={props.open}
      onClose={() => props.onClose?.()}
      message={props.children}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      ClickAwayListenerProps={{ onClickAway: () => undefined }}
      sx={props.sx}
    >
      <StyledToastBox
        sx={{
          backgroundColor: (theme: Theme) => setBackgroundColor(theme),
          color: (theme: Theme) => theme.palette.common.white,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
          gap={2}
        >
          {props.icon}
          <Typography variant="paragraph">{props.message}</Typography>
          {props.onClose && (
            <>
              <Divider
                orientation="vertical"
                sx={{
                  background: (theme: Theme) => theme.palette.common.white,
                }}
              />
              <IconButton
                onClick={() => props.onClose?.()}
                sx={{
                  color: (theme: Theme) => theme.palette.common.white,
                  p: 0,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          )}
        </Stack>
      </StyledToastBox>
    </StyledSnackbar>
  );
};

export default AppToast;
