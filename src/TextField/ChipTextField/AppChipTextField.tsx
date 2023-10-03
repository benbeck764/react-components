import React, { FC, Ref, useImperativeHandle, useRef, useState } from "react";
import {
  ClickAwayListener,
  FormControl,
  IconButton,
  InputProps,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { StyledLabelBox } from "../../_common/styles/common-ui.styles";
import {
  AppTextFieldRefProps,
  AppTextFieldPropSizes,
} from "../AppTextField.common.props";
import {
  StyledChipsInput,
  StyledChipsInputEndAdornment,
  StyledInputAdornment,
} from "../AppTextField.styles";
import { CloseButton } from "@common";
import AppChip from "../../Chip/AppChip";

export type AppChipTextFieldProps = AppTextFieldRefProps &
  Omit<InputProps, "onChange"> & {
    resetRef?: Ref<{ reset: (defaultChips?: string[]) => void }>;
    chips?: string[];
    inputLabel?: string | React.ReactNode;
    errorLabel?: string;
    showErrorIcon?: boolean;
    showClearButton?: boolean;
    disableDeleteOnBackspace?: boolean;
    allowDuplicates?: boolean;
    inputSize?: AppTextFieldPropSizes;
    spacing?: number;
    inputFont?: React.CSSProperties;
    fullWidth?: boolean;
    placeholder?: string;
    showPlaceholder?: boolean;
    onChange?: (chips: string[]) => void;
  };

export const AppChipTextField: FC<AppChipTextFieldProps> = (
  props: AppChipTextFieldProps
) => {
  const {
    resetRef,
    chips,
    inputLabel,
    errorLabel,
    showErrorIcon,
    showClearButton,
    disableDeleteOnBackspace,
    allowDuplicates,
    inputSize,
    spacing,
    inputFont,
    fullWidth,
    placeholder,
    showPlaceholder,
    refCallback,
    onChange,
    ...rest
  } = {
    ...props,
  };

  const [value, setValue] = useState<string>("");
  const [chipValues, setChipValues] = useState<string[]>(chips ?? []);
  const [editableChipIndex, setEditableChipIndex] = useState<
    number | undefined
  >();

  const focusedRef = useRef<boolean>(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = props.inputRef ?? useRef<HTMLInputElement | null>(null);

  const refCallbackFn = (instance: HTMLInputElement): void => {
    inputRef.current = instance;
    props.refCallback?.(instance);
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

  font = inputFont ?? font;

  const inputSX = {
    "&.MuiInput-root": {
      minHeight: height,
      padding: theme.spacing(1),
    },
    "& > .MuiInput-input": {
      fontSize: font.fontSize,
      fontWeight: font.fontWeight,
      lineHeight: font.lineHeight,
      letterSpacing: font.letterSpacing,
    },
    "&.MuiInputBase-root": {},
  };
  const augmentedInputSX = { ...inputSX, ...rest.sx };

  useImperativeHandle(resetRef, () => ({
    reset(defaultValues?: string[]) {
      setChipValues(defaultValues ?? []);
    },
  }));

  const handleClickAway = (): void => {
    if (!focusedRef.current) {
      return;
    }

    setEditableChipIndex(undefined);
    setValue("");

    focusedRef.current = false;
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    focusedRef.current = true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isEnterKey = event.key === "Enter";
    const isBackspace = event.key === "Backspace";
    if (event.code === "Tab") {
      handleClickAway();
      return;
    }

    if (isEnterKey) {
      event.preventDefault();
    }

    if (value.length > 0 && isEnterKey) {
      const trimmedValue = value.trim();
      if (
        trimmedValue.length === 0 ||
        (chipValues.includes(trimmedValue) && !allowDuplicates)
      ) {
        // Clear
        setValue("");
      } else if (typeof editableChipIndex !== "undefined") {
        // Update
        const _chipValues = [...chipValues];
        _chipValues[editableChipIndex] = trimmedValue;
        setChipValues(_chipValues);
        setEditableChipIndex(undefined);
        setValue("");
        onChange?.(_chipValues);
      } else {
        // Add
        const _chipValues = [...chipValues, trimmedValue];
        setChipValues(_chipValues);
        setValue("");
        onChange?.(_chipValues);
      }
    } else if (
      isBackspace &&
      value.length === 0 &&
      chipValues.length > 0 &&
      !disableDeleteOnBackspace
    ) {
      const index = chipValues.length - 1;
      if (editableChipIndex === index) {
        setEditableChipIndex(undefined);
      }
      const _chipValues = [...chipValues];
      _chipValues.splice(index, 1);
      setChipValues(_chipValues);
      onChange?.(_chipValues);
    }
  };

  const handleEditChip = (index?: number, label?: string): void => {
    if (typeof index !== "undefined") {
      if (index === editableChipIndex) {
        setValue("");
        setEditableChipIndex(undefined);
      } else {
        setValue(label ?? chipValues[index] ?? "");
        setEditableChipIndex(index);
      }

      inputRef?.current?.focus();
    }
  };

  const handleDeleteChip = (index?: number): void => {
    if (typeof index !== "undefined") {
      const _chipValues = [...chipValues];
      _chipValues.splice(index, 1);
      setChipValues(_chipValues);
      onChange?.(_chipValues);
    }
  };

  const handleClearAll = (): void => {
    setValue("");
    setChipValues([]);
    setEditableChipIndex(undefined);
    inputRef?.current?.focus();
    onChange?.([]);
  };

  const hasChips = chipValues.length > 0;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <FormControl fullWidth={fullWidth}>
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
        <StyledChipsInput
          {...rest}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          inputRef={refCallback ? refCallbackFn : inputRef}
          tabIndex={-1}
          inputProps={{
            tabIndex: 0,
            onKeyDown: handleKeyDown,
            enterKeyHint: "enter",
          }}
          placeholder={
            showPlaceholder && !hasChips
              ? placeholder ?? "Type and press enter"
              : undefined
          }
          startAdornment={
            hasChips ? (
              <Stack
                direction="row"
                width="100%"
                flexWrap="wrap"
                gap={spacing ?? 0.5}
                sx={{
                  overflowY: "auto",
                  pr: (theme: Theme) =>
                    showClearButton ? theme.spacing(5) : theme.spacing(1),
                }}
              >
                {chipValues?.map((chip: string, index: number) => (
                  <AppChip
                    key={`${chip}-${index}`}
                    label={chip}
                    index={index}
                    sx={{
                      backgroundColor: (theme: Theme) =>
                        theme.palette.grey[100],
                      ...(index === editableChipIndex && {
                        backgroundColor: (theme: Theme) =>
                          theme.palette.coolGrey[400],
                        border: (theme: Theme) =>
                          `1px dashed ${theme.palette.common.black}`,
                      }),
                    }}
                    onEdit={handleEditChip}
                    onDelete={handleDeleteChip}
                  />
                ))}
              </Stack>
            ) : undefined
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
                {!rest.error && showClearButton && chipValues.length > 0 && (
                  <StyledChipsInputEndAdornment position="end">
                    <CloseButton onClick={handleClearAll} />
                  </StyledChipsInputEndAdornment>
                )}
              </>
            )
          }
          disableUnderline
          sx={augmentedInputSX}
        />
        {errorLabel && rest.error && (
          <StyledLabelBox>
            <Typography
              sx={{
                color: (theme) =>
                  rest.error
                    ? theme.palette.error.main
                    : theme.palette.common.black,
              }}
            >
              {errorLabel}
            </Typography>
          </StyledLabelBox>
        )}
      </FormControl>
    </ClickAwayListener>
  );
};

AppChipTextField.defaultProps = {
  fullWidth: true,
};

export default AppChipTextField;
