import { FC, useState, useEffect } from "react";
import { Theme } from "@mui/material";
import {
  StyledCheckbox,
  StyledFormControlLabel,
  StyledCheckIcon,
  StyledLabel,
  StyledMinusIcon,
} from "./AppCheckbox.styles";
import { AppLoadingCheckbox } from "./components/AppLoadingCheckbox";
import { isString } from "@utilities";
import { AppCheckboxProps, CheckboxItem } from "./AppCheckbox.props";

export const AppCheckbox: FC<AppCheckboxProps> = (props: AppCheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    Boolean(props.item.checked)
  );

  useEffect(() => {
    setIsChecked(Boolean(props.item.checked));
  }, [props.item.checked]);

  const handleClick = () => {
    const checked = !isChecked;
    setIsChecked(checked);
    const newItem: CheckboxItem = { ...props.item, checked };
    props.onCheckedChanged(newItem);
  };

  let checkboxSize = 24; // large
  if (props.size === "medium") {
    checkboxSize = 20;
  } else if (props.size === "small") {
    checkboxSize = 16;
  }

  const primaryCheckedIcon =
    props.icon === "check" ? (
      <StyledCheckIcon
        checkboxSize={checkboxSize}
        fontSize="small"
        sx={{
          padding: "1.5px",
          color: (theme: Theme) => theme.palette.common.white,
          backgroundColor: (theme: Theme) => theme.palette.primary.main,
        }}
      />
    ) : (
      <StyledMinusIcon
        checkboxSize={checkboxSize}
        fontSize="small"
        sx={{
          padding: "1.5px",
          color: (theme: Theme) => theme.palette.common.white,
          backgroundColor: (theme: Theme) => theme.palette.primary.main,
        }}
      />
    );

  const secondaryCheckedIcon =
    props.icon === "check" ? (
      <StyledCheckIcon
        checkboxSize={checkboxSize}
        fontSize="small"
        sx={{
          color: (theme: Theme) => theme.palette.primary.main,
          backgroundColor: (theme: Theme) => theme.palette.common.white,
          border: (theme: Theme) => `1.5px solid ${theme.palette.primary.main}`,
        }}
      />
    ) : (
      <StyledMinusIcon
        checkboxSize={checkboxSize}
        fontSize="small"
        sx={{
          color: (theme: Theme) => theme.palette.primary.main,
          backgroundColor: (theme: Theme) => theme.palette.common.white,
          border: (theme: Theme) => `1.5px solid ${theme.palette.primary.main}`,
        }}
      />
    );

  const label = isString(props.item.label) ? (
    <StyledLabel>{props.item.label}</StyledLabel>
  ) : (
    props.item.label ?? <></>
  );

  if (props.loadingPlaceholder) {
    return <AppLoadingCheckbox containerSx={props.sx} size={props.size} />;
  }

  return (
    <StyledFormControlLabel
      {...(props.hidden ? { sx: { display: "none" } } : { sx: props.sx })}
      control={
        <StyledCheckbox
          checkboxSize={checkboxSize}
          checked={isChecked}
          role="checkbox"
          aria-checked={isChecked}
          disabled={props.item.disabled}
          onClick={(event) => {
            if (props.stopPropagation) event.stopPropagation();
            handleClick();
          }}
          onKeyDown={(event) => {
            if (props.stopPropagation) event.stopPropagation();
            if (event.key === "Enter") {
              handleClick();
            }
          }}
          size="small"
          color="primary"
          disableRipple
          icon={
            <StyledCheckIcon checkboxSize={checkboxSize} fontSize="small" />
          }
          indeterminateIcon={<StyledCheckIcon checkboxSize={checkboxSize} />}
          checkedIcon={
            props.variant === "secondary"
              ? secondaryCheckedIcon
              : primaryCheckedIcon
          }
          {...props.checkboxProps}
        />
      }
      label={label}
    />
  );
};
