import { FC, PropsWithChildren, MouseEvent, useMemo } from "react";
import {
  Box,
  Stack,
  ButtonProps,
  debounce,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledDialog,
  StyledDialogContainer,
  StyledDialogFooter,
  StyledDialogButton,
} from "./AppDialog.styles";
import { AppContentLoader } from "../Loader/AppContentLoader";

type AppDialogProps = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  primaryButton?: boolean;
  primaryButtonProps?: ButtonProps;
  secondaryButton?: boolean;
  secondaryButtonProps?: ButtonProps;
  hideCloseButton?: boolean;
  loading?: boolean;
  paperSx?: SxProps<Theme>;
  allowBackdropClickClose?: boolean;
  allowEscapeKeyClose?: boolean;
  allowScroll?: boolean;
};

const AppDialog: FC<PropsWithChildren<AppDialogProps>> = (
  props: PropsWithChildren<AppDialogProps>
) => {
  const {
    children,
    title,
    open,
    onClose,
    primaryButton,
    primaryButtonProps,
    secondaryButton,
    secondaryButtonProps,
    hideCloseButton,
    loading,
    paperSx,
    allowBackdropClickClose,
    allowEscapeKeyClose,
    allowScroll,
  } = props;

  const handlePrimaryClick = (event: MouseEvent<HTMLButtonElement>) => {
    primaryButtonProps?.onClick?.(event);
  };

  const handleSecondaryClick = (event: MouseEvent<HTMLButtonElement>) => {
    secondaryButtonProps?.onClick?.(event);
  };

  const handleDialogClose = (
    _event: unknown,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick" && !allowBackdropClickClose) return false;
    if (reason === "escapeKeyDown" && !allowEscapeKeyClose) return false;
    onClose?.();
  };

  const debouncedPrimaryBtnClick = useMemo(
    () => debounce(handlePrimaryClick, 300),
    [primaryButtonProps?.onClick]
  );

  const debouncedSecondaryBtnClick = useMemo(
    () => debounce(handleSecondaryClick, 300),
    [secondaryButtonProps?.onClick]
  );

  return (
    <StyledDialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="dialog"
      PaperProps={{ sx: { width: 424, ...paperSx } }}
    >
      <AppContentLoader loading={loading ?? false} />
      <StyledDialogContainer
        p={2}
        sx={{
          ...(allowScroll && {
            overflowY: "auto",
          }),
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pb: !title && hideCloseButton ? 0 : 2 }}
        >
          <Box>
            {title && (
              <Box>
                <Typography sx={{ width: "100%" }} variant="h4">
                  {title}
                </Typography>
              </Box>
            )}
          </Box>
          {!hideCloseButton && (
            <Box>
              <IconButton color="primary" onClick={() => onClose?.()}>
                <CloseIcon />
              </IconButton>
            </Box>
          )}
        </Stack>
        <Stack direction="column" justifyContent="space-between">
          {children}
          {(primaryButtonProps || secondaryButtonProps) && (
            <StyledDialogFooter sx={{ padding: 0, pt: 2 }}>
              {(secondaryButtonProps || secondaryButton) && (
                <StyledDialogButton
                  variant="contained"
                  color="secondary"
                  {...secondaryButtonProps}
                  onClick={debouncedSecondaryBtnClick}
                >
                  {secondaryButtonProps?.children ?? "No"}
                </StyledDialogButton>
              )}
              {(primaryButtonProps || primaryButton) && (
                <StyledDialogButton
                  variant="contained"
                  color="primary"
                  {...primaryButtonProps}
                  onClick={debouncedPrimaryBtnClick}
                >
                  {primaryButtonProps?.children ?? "Yes"}
                </StyledDialogButton>
              )}
            </StyledDialogFooter>
          )}
        </Stack>
      </StyledDialogContainer>
    </StyledDialog>
  );
};

export default AppDialog;
