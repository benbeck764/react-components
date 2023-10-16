import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import { createTheme } from "@mui/material/styles";
import { defaultThemeOptions } from "../_theme/base.theme";
import { getMUITheme } from "../_theme/mui.theme";
import AppCheckboxList, { AppCheckboxListProps } from "./AppCheckboxList";
import { CheckboxItem } from "../Checkbox/AppCheckbox.props";

type AppCheckboxListStoryProps = AppCheckboxListProps;
type Story = StoryObj<typeof AppCheckboxList>;

export const CheckboxList: Story = (args: AppCheckboxListStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));

  const [tierCheckboxes, setTierCheckboxes] = useState<CheckboxItem[]>([
    {
      label: "Tier 1 (Free)",
      checked: false,
      name: "tier1",
    },
    {
      label: "Tier 2",
      checked: false,
      name: "tier2",
    },
    {
      label: "Tier 3",
      checked: false,
      name: "tier3",
    },
  ]);

  return (
    <CustomThemeProvider theme={theme}>
      <AppCheckboxList
        inputLabel="Pricing Tier"
        checkboxSize="medium"
        items={tierCheckboxes}
        onCheckedChange={(item: CheckboxItem) => {
          const index = tierCheckboxes.findIndex(
            (i: CheckboxItem) => i.name === item.name
          );
          if (index >= 0) {
            const updatedItems = [...tierCheckboxes];
            updatedItems[index] = item;
            setTierCheckboxes(updatedItems);
          }
        }}
        onSelectAll={(selected: boolean) => {
          const updatedItems = [
            ...tierCheckboxes.map((i: CheckboxItem) => {
              return { ...i, checked: selected };
            }),
          ];
          setTierCheckboxes(updatedItems);
        }}
      />
    </CustomThemeProvider>
  );
};
CheckboxList.args = {};

const meta: Meta<typeof AppCheckboxList> = {
  component: AppCheckboxList,
  title: "AppCheckboxList",
};
export default meta;
