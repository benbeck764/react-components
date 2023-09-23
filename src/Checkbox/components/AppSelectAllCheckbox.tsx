import { FC } from "react";
import { Box } from "@mui/material";
import AppCheckbox from "../AppCheckbox";
import {
  CheckboxItem,
  AppCheckboxSize,
  AppCheckboxVariant,
} from "../AppCheckbox.props";

type AppSelectAllCheckboxProps = {
  allLinesCount: number;
  selectedLinesCount: number;
  label: string | JSX.Element;
  onCheckedChanged: (item: CheckboxItem) => void;
  size?: AppCheckboxSize;
  variant?: AppCheckboxVariant;
};

export const AppSelectAllCheckbox: FC<AppSelectAllCheckboxProps> = (
  props: AppSelectAllCheckboxProps
) => {
  const {
    allLinesCount,
    selectedLinesCount,
    label,
    onCheckedChanged,
    size,
    variant,
  } = props;

  return (
    <Box>
      <AppCheckbox
        size={size || "large"}
        item={{ label: label, checked: selectedLinesCount > 0 }}
        onCheckedChanged={onCheckedChanged}
        variant={variant || "primary"}
        icon={selectedLinesCount >= allLinesCount ? "check" : "minus"}
      />
    </Box>
  );
};
