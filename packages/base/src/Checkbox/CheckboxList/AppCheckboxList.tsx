"use client";
import { FC, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppCheckbox from "../AppCheckbox";
import {
  CheckboxItem,
  AppCheckboxVariant,
  AppCheckboxIcon,
  AppCheckboxSize,
} from "../AppCheckbox.props";
import { StyledFormGroup, StyledViewMore } from "./AppCheckboxList.styles";
import { AppSelectAllCheckbox } from "../components/AppSelectAllCheckbox";
import { StyledLabel } from "../AppCheckbox.styles";
import StyledLabelBox from "../../_common/LabelBox";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

export type AppCheckboxListProps = {
  items: CheckboxItem[];
  selectAll?: boolean;
  length?: number;
  variant?: AppCheckboxVariant;
  icon?: AppCheckboxIcon;
  sx?: SxProps<Theme>;
  checkboxStyle?: SxProps<Theme>;
  checkboxSize?: AppCheckboxSize;
  inputLabel?: string | React.ReactNode;
  onCheckedChange?: (item: CheckboxItem) => void;
  onSelectAll?: (selected: boolean) => void;
};

const AppCheckboxList: FC<AppCheckboxListProps> = (
  props: AppCheckboxListProps
) => {
  const {
    items,
    selectAll = true,
    length = 5,
    variant = "primary",
    icon = "check",
    sx,
    checkboxStyle,
    checkboxSize,
    inputLabel,
    onCheckedChange,
    onSelectAll,
  } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleCheckedChange = (item: CheckboxItem): void => {
    if (onCheckedChange) {
      onCheckedChange(item);
    }
  };

  const displayOverflowToggle =
    typeof length !== "undefined" && length < items.length;
  const baseLength = displayOverflowToggle && length ? length : items.length;

  const childrenBase: React.ReactNode[] = [];
  const childrenOverflow: React.ReactNode[] = [];
  items.forEach((item, index) => {
    const checkBox = (
      <AppCheckbox
        key={index}
        item={item}
        onCheckedChanged={handleCheckedChange}
        variant={variant ?? "primary"}
        icon={icon ?? "check"}
        hidden={displayOverflowToggle && !isExpanded && index > baseLength}
        sx={checkboxStyle}
        size={checkboxSize}
      />
    );
    if (index > baseLength) childrenOverflow.push(checkBox);
    else childrenBase.push(checkBox);
  });

  return (
    <Box sx={sx}>
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

      {selectAll && (
        <Box sx={{ mb: 0.75 }}>
          <AppSelectAllCheckbox
            size={checkboxSize}
            allLinesCount={items.length}
            selectedLinesCount={
              items.filter((i: CheckboxItem) => i.checked).length
            }
            label={<StyledLabel>Select All</StyledLabel>}
            onCheckedChanged={(i: CheckboxItem) => onSelectAll?.(i.checked)}
          />
        </Box>
      )}

      <StyledFormGroup>{childrenBase}</StyledFormGroup>
      <Collapse in={isExpanded}>
        <StyledFormGroup sx={{ mt: 0.5 }}>{childrenOverflow}</StyledFormGroup>
      </Collapse>
      {displayOverflowToggle && (
        <Box
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ paddingLeft: 3 }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsExpanded(!isExpanded);
          }}
        >
          <StyledViewMore variant="paragraphSmallBold" color="primary">
            View {isExpanded ? "Less" : "More"}
          </StyledViewMore>
          {isExpanded ? (
            <ExpandLessIcon
              fontSize="small"
              sx={{ paddingLeft: 1 }}
              color="primary"
            />
          ) : (
            <ExpandMoreIcon
              fontSize="small"
              sx={{ paddingLeft: 1 }}
              color="primary"
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default AppCheckboxList;
