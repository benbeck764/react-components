import {
  Box,
  FormControl,
  Select,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { Ref, useEffect, useImperativeHandle, useState } from "react";
import { StyledLabelBox } from "@benbeck764/@react-components/common";
import AppMultiSelectMenuItem from "./AppMultiSelectMenuItem";
import AppChip from "../../Chip/AppChip";
import { SelectItem } from "../common/SelectItem";

type AppSelectProps<TItem> = {
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  resetRef?: Ref<{ reset: (defaultValues?: SelectItem<TItem>[]) => void }>;
  items: SelectItem<TItem>[];
  defaultValues?: SelectItem<TItem>[];
  onChange?: (values: SelectItem<TItem>[]) => void;
  inputLabel?: string | React.ReactNode;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps<Theme>;
};

function AppMultiSelect<TItem>(props: AppSelectProps<TItem>): JSX.Element {
  const {
    inputRef,
    resetRef,
    items,
    defaultValues,
    onChange,
    inputLabel,
    fullWidth,
    placeholder,
    sx,
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectItem<TItem>[]>(
    defaultValues ?? []
  );

  useImperativeHandle(resetRef, () => ({
    reset(defaultValues?: SelectItem<TItem>[]) {
      setSelectedItems(defaultValues ?? []);
    },
  }));

  useEffect(() => {
    setSelectedItems(defaultValues ?? []);
  }, []);

  const handleSelect = (item: SelectItem<TItem>, checked: boolean) => {
    let newItems: SelectItem<TItem>[] = [];
    if (checked) {
      newItems = [...selectedItems, item];
      setSelectedItems(newItems);
    } else {
      newItems = selectedItems.filter(
        (si: SelectItem<TItem>) => si.value !== item.value
      );
      setSelectedItems(newItems);
    }
    onChange?.(newItems);
  };

  const menuItems: React.ReactNode[] = [];
  items.forEach((item: SelectItem<TItem>, index: number) => {
    menuItems.push(
      <AppMultiSelectMenuItem
        key={index}
        checked={
          typeof selectedItems.find(
            (si: SelectItem<TItem>) => si.value === item.value
          ) !== "undefined"
        }
        item={item}
        onChange={(item: SelectItem<TItem>, checked: boolean) =>
          handleSelect(item, checked)
        }
        sx={{ py: 0.75, px: 1 }}
      />
    );
  });

  return (
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
      <Select
        multiple
        inputRef={inputRef}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={selectedItems}
        displayEmpty={typeof placeholder !== "undefined"}
        renderValue={() => {
          if (selectedItems.length) {
            return (
              <>
                {selectedItems.map((selectedOption: SelectItem<TItem>) => (
                  <AppChip
                    sx={{
                      zIndex: 2,
                      backgroundColor: (theme: Theme) =>
                        theme.palette.grey[100],
                      "&:not(:last-child)": {
                        mr: 0.5,
                      },
                    }}
                    key={selectedOption.value}
                    label={selectedOption.label}
                    onDelete={() => handleSelect(selectedOption, false)}
                  />
                ))}
              </>
            );
          } else {
            return (
              <Typography
                sx={{
                  color: (theme: Theme) => theme.palette.grey[300],
                  lineHeight: "inherit",
                }}
              >
                {placeholder}
              </Typography>
            );
          }
        }}
        sx={{
          ...sx,
          backgroundColor: (theme: Theme) => theme.palette.common.white,
          "&.MuiInputBase-root": {
            minHeight: 40,
            height: "auto",
            padding: "0 !important",
            ".MuiSelect-select": {
              padding: (theme) => theme.spacing(1.5),
            },
          },
        }}
      >
        <Box sx={{ maxHeight: 300 }}>{menuItems}</Box>
      </Select>
    </FormControl>
  );
}

export default AppMultiSelect;
