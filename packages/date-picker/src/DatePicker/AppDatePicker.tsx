import { FC, Ref, useImperativeHandle, useState } from "react";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Moment } from "moment";
import {
  FormControl,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import {
  useBreakpoint,
  BreakpointDevice,
  StyledLabelBox,
} from "@benbeck764/react-components-common";
import { AppTextFieldPropSizes } from "../TextField/AppTextField.common.props";

export type AppDatePickerProps = {
  value?: Moment | null;
  onChange?: (value: Moment | null) => void;
  resetRef?: Ref<{ reset: (defaultValue?: Moment | null) => void }>;
  inputLabel?: string | React.ReactNode;
  inputSize?: AppTextFieldPropSizes;
  fullWidth?: boolean;
  errorLabel?: string;
  spacing?: number;
  font?: React.CSSProperties;
  sx?: SxProps<Theme>;
};

const AppDatePicker: FC<AppDatePickerProps> = (props: AppDatePickerProps) => {
  const {
    value,
    onChange,
    resetRef,
    inputLabel,
    inputSize,
    fullWidth,
    errorLabel,
    spacing,
    font,
    sx,
  } = props;

  const { device } = useBreakpoint();
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState<Moment | null>(
    value ?? null
  );

  const [errorMessage, setErrorMessage] = useState<string>("");

  useImperativeHandle(resetRef, () => ({
    reset(defaultValue?: Moment | null) {
      setSelectedValue(defaultValue ?? null);
    },
  }));

  let height = "32px";
  let inputFont = theme.typography.paragraphSmall;
  let iconSize = "0.8em";
  switch (inputSize) {
    case "small":
      height = "32px !important";
      break;
    case "medium":
      height = "40px !important";
      inputFont = theme.typography.paragraph;
      iconSize = "0.9em";
      break;
    case "large":
      height = "40px !important";
      inputFont = theme.typography.paragraph;
      iconSize = "1em";
      break;
  }

  inputFont = font ?? inputFont;

  const inputSx = {
    "& .MuiInputBase-root": {
      height: height,
      border: `1px solid ${theme.palette.coolGrey[300]}`,
      borderRadius: "4px",
      backgroundColor: theme.palette.common.white,

      "&.Mui-focused": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      "&.Mui-error": {
        border: `2px solid ${theme.palette.error.main}`,
      },

      "& > input": {
        paddingTop: 0,
        paddingBottom: 0,
        WebKitTextFillColor: "currentcolor", // iOS/Safari issue fix
        opacity: 1,
        paddingX: theme.spacing(spacing || 1),
        fontSize: inputFont.fontSize,
        fontWeight: inputFont.fontWeight,
        lineHeight: inputFont.lineHeight,
        letterSpacing: inputFont.letterSpacing,
      },
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "button > svg": {
      fontSize: iconSize,
    },
  };
  const augmentedInputSx = { ...inputSx, ...sx };

  return (
    <FormControl>
      {inputLabel && (
        <StyledLabelBox>
          {typeof inputLabel === "string" && (
            <Typography
              variant="paragraph"
              sx={{ color: (theme) => theme.palette.grey[700] }}
            >
              {inputLabel}
            </Typography>
          )}
          {typeof inputLabel !== "string" && inputLabel}
        </StyledLabelBox>
      )}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          value={selectedValue}
          onChange={(
            changedValue: Moment | null,
            context: PickerChangeHandlerContext<DateValidationError>
          ) => {
            const error = context.validationError;
            if (error) {
              if (error === "invalidDate") setErrorMessage("Invalid date");
              if (error === "minDate" || error === "maxDate")
                setErrorMessage("Year should be between 1900-2099");
            } else {
              setErrorMessage("");
              setSelectedValue(changedValue);
              onChange?.(changedValue);
            }
          }}
          slotProps={{
            actionBar: () => ({
              actions:
                device === BreakpointDevice.Desktop ? [] : ["clear", "accept"],
            }),
            textField: {
              variant: "outlined",
              sx: augmentedInputSx,
              fullWidth: fullWidth,
            },
          }}
        />
      </LocalizationProvider>
      {(errorMessage || errorLabel) && (
        <StyledLabelBox>
          <Typography
            sx={{
              color: (theme) => theme.palette.error.main,
            }}
          >
            {errorMessage || errorLabel}
          </Typography>
        </StyledLabelBox>
      )}
    </FormControl>
  );
};

export default AppDatePicker;
