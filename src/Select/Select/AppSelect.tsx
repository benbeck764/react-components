import {
  Divider,
  FormControl,
  Select,
  SelectProps,
  Theme,
  Typography,
} from "@mui/material";
import { Ref, useEffect, useImperativeHandle, useState } from "react";
import { StyledLabelBox } from "../../_common/styles/common-ui.styles";
import AppSelectMenuItem from "../common/AppSelectMenuItem";
import { SelectItem } from "../common/SelectItem";

export type AppSelectInputSizes = "small" | "medium" | "large";

type AppSelectProps<TItem> = Omit<
  SelectProps<SelectItem<TItem>>,
  "onSelect" | "value"
> & {
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  resetRef?: Ref<{ reset: (defaultValue?: SelectItem<TItem>) => void }>;
  items: SelectItem<TItem>[];
  onSelected?: (value: SelectItem<TItem> | undefined) => void;
  inputLabel?: string | React.ReactNode;
  fullWidth?: boolean;
  inputSize?: AppSelectInputSizes;
  emptyValueOptions?: {
    enabled: boolean;
    placeholder: string | React.ReactNode;
    showClearOption: boolean;
  };
};

function AppSelect<TItem>(props: AppSelectProps<TItem>): JSX.Element {
  const {
    inputRef,
    resetRef,
    items,
    onSelected,
    inputLabel,
    fullWidth,
    inputSize,
    emptyValueOptions,
    ...rest
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    SelectItem<TItem> | undefined
  >(rest.defaultValue);

  useImperativeHandle(resetRef, () => ({
    reset(defaultValue?: SelectItem<TItem>) {
      setSelectedItem(defaultValue);
    },
  }));

  useEffect(() => {
    setSelectedItem(rest.defaultValue);
  }, []);

  const handleSelect = (selectedMenuItem: SelectItem<TItem> | undefined) => {
    const item = items.filter(
      (item: SelectItem<TItem>) => item.value === selectedMenuItem?.value
    )?.[0];
    setOpen(false);
    setSelectedItem(item);
    if (item) onSelected?.(item);
  };

  const menuItems: React.ReactNode[] = [];
  if (emptyValueOptions?.showClearOption) {
    menuItems.push(
      <AppSelectMenuItem
        item={{
          value: "clear-item",
          label: "None",
          item: undefined,
        }}
        key="clear-item"
        sx={{ color: (theme: Theme) => theme.palette.coolGrey[400] }}
        onSelect={() => {
          setOpen(false);
          setSelectedItem(undefined);
          onSelected?.(undefined);
        }}
      >
        None
      </AppSelectMenuItem>
    );
    menuItems.push(<Divider key="divider" sx={{ mx: 1 }} />);
  }

  items.forEach((item: SelectItem<TItem>, index: number) => {
    menuItems.push(
      <AppSelectMenuItem item={item} key={index} onSelect={handleSelect}>
        {item.label}
      </AppSelectMenuItem>
    );
  });

  let height = "32px";
  switch (inputSize) {
    case "small":
      height = "32px";
      break;
    case "medium":
      height = "40px";
      break;
    case "large":
      height = "40px";
      break;
  }

  const sx = rest.sx;

  return (
    <FormControl fullWidth={fullWidth} sx={sx}>
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
        {...rest}
        inputRef={inputRef}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={selectedItem ?? ""}
        {...(emptyValueOptions?.enabled === true && {
          displayEmpty: true,
        })}
        renderValue={(renderValue: SelectItem<TItem>) => {
          if (typeof selectedItem !== "undefined") {
            return (
              <Typography sx={{ color: (theme) => theme.palette.common.black }}>
                {renderValue?.label}
              </Typography>
            );
          } else {
            return (
              <Typography sx={{ color: (theme) => theme.palette.grey[300] }}>
                {emptyValueOptions?.placeholder}
              </Typography>
            );
          }
        }}
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          "&.MuiInputBase-root": {
            height: height,
          },
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default AppSelect;
