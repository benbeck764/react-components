import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CustomThemeProvider from "../theme/CustomThemeProvider";
import { defaultThemeOptions } from "../theme/base.theme";
import { getMUITheme } from "../theme/mui.theme";
import AppCard, { AppCardProps } from "./AppCard";

type AppCardStoryProps = AppCardProps;
type Story = StoryObj<typeof AppCard>;

export const Card: Story = (args: AppCardStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));

  return (
    <CustomThemeProvider theme={theme}>
      <AppCard
        cardSx={{ width: 500 }}
        paperSx={{ width: "100%", px: 2, pt: 2, pb: 4 }}
      >
        <Typography variant="h3">Hello World</Typography>
        <Divider />
      </AppCard>
    </CustomThemeProvider>
  );
};
Card.args = {};

const meta: Meta<typeof AppCard> = {
  component: AppCard,
  title: "AppCard",
};
export default meta;
