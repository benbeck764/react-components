import { FC, useState } from "react";
import { SxProps, Theme, Box, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { AppCheckbox } from "../AppCheckbox";
import {
  CheckboxItem,
  AppCheckboxVariant,
  AppCheckboxIcon,
  AppCheckboxSize,
} from "../AppCheckbox.props";
import { StyledFormGroup, StyledViewMore } from "./AppCheckboxList.styles";
import { AppSelectAllCheckbox } from "../components/AppSelectAllCheckbox";
import { StyledLabel } from "../AppCheckbox.styles";
import { StyledLabelBox } from "@common";

export type AppCheckboxListProps = {
  items: CheckboxItem[];
  onCheckedChange?: (item: CheckboxItem) => void;
  selectAll?: boolean;
  onSelectAll?: (selected: boolean) => void;
  length?: number;
  variant?: AppCheckboxVariant;
  icon?: AppCheckboxIcon;
  sx?: SxProps<Theme>;
  checkboxStyle?: SxProps<Theme>;
  checkboxSize?: AppCheckboxSize;
  inputLabel?: string | React.ReactNode;
};

export const AppCheckboxList: FC<AppCheckboxListProps> = (
  props: AppCheckboxListProps
) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleCheckedChange = (item: CheckboxItem): void => {
    if (props.onCheckedChange) {
      props.onCheckedChange(item);
    }
  };

  const displayOverflowToggle =
    typeof props.length !== "undefined" && props.length < props.items.length;
  const baseLength =
    displayOverflowToggle && props.length ? props.length : props.items.length;

  const childrenBase: React.ReactNode[] = [];
  const childrenOverflow: React.ReactNode[] = [];
  props.items.forEach((item, index) => {
    const checkBox = (
      <AppCheckbox
        key={index}
        item={item}
        onCheckedChanged={handleCheckedChange}
        variant={props.variant ?? "primary"}
        icon={props.icon ?? "check"}
        hidden={displayOverflowToggle && !isExpanded && index > baseLength}
        sx={props.checkboxStyle}
        size={props.checkboxSize}
      />
    );
    if (index > baseLength) childrenOverflow.push(checkBox);
    else childrenBase.push(checkBox);
  });

  return (
    <Box sx={props.sx}>
      {props.inputLabel && (
        <StyledLabelBox>
          {typeof props.inputLabel === "string" && (
            <Typography sx={{ color: (theme) => theme.palette.grey[700] }}>
              {props.inputLabel}
            </Typography>
          )}
          {typeof props.inputLabel !== "string" && props.inputLabel}
        </StyledLabelBox>
      )}

      {props.selectAll && (
        <Box sx={{ mb: 0.75 }}>
          <AppSelectAllCheckbox
            size={props.checkboxSize}
            allLinesCount={props.items.length}
            selectedLinesCount={
              props.items.filter((i: CheckboxItem) => i.checked).length
            }
            label={<StyledLabel>Select All</StyledLabel>}
            onCheckedChanged={(i: CheckboxItem) =>
              props.onSelectAll?.(i.checked)
            }
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
            <ExpandLess
              fontSize="small"
              sx={{ paddingLeft: 1 }}
              color="primary"
            />
          ) : (
            <ExpandMore
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

AppCheckboxList.defaultProps = {
  variant: "primary",
  selectAll: true,
  icon: "check",
  length: 6,
};
