import React, { FC, Ref, useRef } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputProps,
  Typography,
  useTheme,
} from "@mui/material";
import { StyledInput, StyledInputAdornment } from "./AppTextField.styles";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { StyledLabelBox } from "../_common/styles/common-ui.styles";
import {
  AppTextFieldRefProps,
  AppTextFieldPropSizes,
} from "./AppTextField.common.props";
import { CloseButton } from "@common";

export type AppTextFieldProps = AppTextFieldRefProps &
  InputProps & {
    inlineLabel?: string | React.ReactNode;
    inputLabel?: string | React.ReactNode;
    helpLabel?: string | React.ReactNode;
    errorLabel?: string;
    startIcon?: React.ReactNode;
    showErrorIcon?: boolean;
    showSuccessIcon?: boolean;
    showClearButton?: boolean;
    onClear?: () => void;
    inputSize?: AppTextFieldPropSizes;
    spacing?: number;
    font?: React.CSSProperties;
    fullWidth?: boolean;
    containerRef?: Ref<any> | undefined;
  };

const AppTextField: FC<AppTextFieldProps> = (props: AppTextFieldProps) => {
  const {
    inlineLabel,
    inputLabel,
    helpLabel,
    errorLabel,
    startIcon,
    showErrorIcon,
    showSuccessIcon,
    showClearButton,
    onClear,
    inputSize,
    spacing,
    refCallback,
    containerRef,
    ...rest
  } = {
    ...props,
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = props.inputRef ?? useRef<HTMLInputElement | null>(null);

  const handleClear = (): void => {
    inputRef?.current?.focus();
    onClear?.();
  };

  const handleKeydown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") rest.onSubmit?.(event);
  };

  const theme = useTheme();

  let height = "32px";
  let font = theme.typography.paragraphSmall;
  switch (inputSize) {
    case "small":
      height = "32px";
      break;
    case "medium":
      height = "40px";
      font = theme.typography.paragraph;
      break;
    case "large":
      height = "40px";
      font = theme.typography.paragraph;
      break;
  }
  if (rest.multiline) height = "";
  if (inlineLabel) font = theme.typography.paragraphBold;

  font = props.font ?? font;

  const inputSX = {
    "&.MuiInput-root": {
      height: height,
    },
    "& > .MuiInput-input": {
      paddingX: theme.spacing(spacing || 1),
      fontSize: font.fontSize,
      fontWeight: font.fontWeight,
      lineHeight: font.lineHeight,
      letterSpacing: font.letterSpacing,
    },
  };
  const augmentedInputSX = { ...inputSX, ...rest.sx };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") rest.onSubmit?.(event);
  };

  const refCallbackFn = (instance: HTMLInputElement): void => {
    inputRef.current = instance;
    props.refCallback?.(instance);
  };

  return (
    <FormControl
      ref={containerRef}
      fullWidth={props.fullWidth}
      onKeyPress={handleKeyPress}
    >
      {inputLabel && (
        <StyledLabelBox>
          {typeof inputLabel === "string" && (
            <Typography sx={{ color: (theme) => theme.palette.grey[700] }}>
              {inputLabel}
            </Typography>
          )}
          {typeof inputLabel !== "string" && inputLabel}
        </StyledLabelBox>
      )}
      <StyledInput
        {...rest}
        onKeyDown={rest.onKeyDown ?? handleKeydown}
        inputRef={refCallback ? refCallbackFn : inputRef}
        tabIndex={-1}
        inputProps={{
          tabIndex: 0,
        }}
        disableUnderline
        sx={augmentedInputSX}
        startAdornment={
          <>
            {inlineLabel && (
              <InputAdornment
                position="start"
                sx={{ paddingLeft: 2, marginRight: -0.5 }}
              >
                <Typography
                  variant="paragraph"
                  sx={{ color: (theme) => theme.palette.common.black }}
                >
                  {inlineLabel}
                </Typography>
              </InputAdornment>
            )}
            {startIcon && startIcon}
          </>
        }
        endAdornment={
          props.endAdornment ?? (
            <>
              {rest.error && showErrorIcon && (
                <StyledInputAdornment position="end">
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    disabled
                  >
                    <WarningAmberIcon color="error" />
                  </IconButton>
                </StyledInputAdornment>
              )}
              {!rest.error && showSuccessIcon && (
                <StyledInputAdornment position="end">
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    disabled
                  >
                    <CheckCircleOutlineIcon color="success" />
                  </IconButton>
                </StyledInputAdornment>
              )}
              {!rest.error &&
                showClearButton &&
                ((rest.value as string) ?? "").length > 0 && (
                  <StyledInputAdornment position="end">
                    <CloseButton onClick={handleClear} />{" "}
                  </StyledInputAdornment>
                )}
            </>
          )
        }
      />
      {errorLabel && rest.error && (
        <StyledLabelBox>
          <Typography
            sx={{
              color: (theme) => theme.palette.error.main,
            }}
          >
            {errorLabel}
          </Typography>
        </StyledLabelBox>
      )}
      {helpLabel && !rest.error && (
        <StyledLabelBox>
          {typeof helpLabel === "string" && (
            <Typography
              variant="paragraphSmall"
              sx={{
                color: (theme) => theme.palette.coolGrey[400],
              }}
            >
              {helpLabel}
            </Typography>
          )}
          {typeof helpLabel !== "string" && helpLabel}
        </StyledLabelBox>
      )}
    </FormControl>
  );
};

AppTextField.defaultProps = {
  fullWidth: true,
};

export default AppTextField;
