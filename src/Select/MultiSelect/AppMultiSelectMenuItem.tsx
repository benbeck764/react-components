import { SxProps, Theme } from "@mui/material";
import { SelectItem } from "../common/SelectItem";
import { StyledMultiSelectMenuItem } from "./AppMultiSelect.styles";
import { AppCheckbox } from "../../Checkbox/AppCheckbox";
import { CheckboxItem } from "../../Checkbox/AppCheckbox.props";

export type AppMultiSelectMenuItemProps<TItem> = {
  item: SelectItem<TItem>;
  checked: boolean;
  onChange?: (value: SelectItem<TItem>, checked: boolean) => void;
  sx?: SxProps<Theme>;
};

export function AppMultiSelectMenuItem<TItem>(
  props: AppMultiSelectMenuItemProps<TItem>
) {
  const { item, checked, onChange, sx } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    const key = event.key;
    if (key === "Enter") {
      onChange?.(item, !checked);
      event.preventDefault();
    }
  };

  const handleClick = () => {
    onChange?.(item, !checked);
  };

  return (
    <StyledMultiSelectMenuItem
      direction="row"
      alignItems="center"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      sx={sx}
    >
      <AppCheckbox
        item={{ label: "", checked: checked }}
        size="medium"
        onCheckedChanged={(checkBoxItem: CheckboxItem) =>
          onChange?.(item, checkBoxItem.checked)
        }
      />
      {item.label}
    </StyledMultiSelectMenuItem>
  );
}
