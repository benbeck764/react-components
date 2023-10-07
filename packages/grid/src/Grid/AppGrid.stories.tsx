import { Meta, StoryObj } from "@storybook/react";
import { Box, Typography, createTheme } from "@mui/material";
import AppGrid from "./AppGrid";
import { AppGridProps } from "./AppGrid.props";
import { CustomThemeProvider } from "@benbeck764/react-components";

type GridData = {
  title: string;
  description: string;
};

const generateGridItems = (numItems: number): GridData[] => {
  return Array.from(Array(numItems).keys()).map((num: number) => {
    return {
      title: `Grid Item #${num + 1}`,
      description: `This right here is the description for Grid Item #${
        num + 1
      }.`,
    };
  });
};

type Story = StoryObj<typeof AppGrid<GridData>>;

export const VirtualizedCardGrid: Story = (args: AppGridProps<GridData>) => {
  const theme = createTheme({});
  return (
    <CustomThemeProvider theme={theme}>
      <Box width={800}>
        <AppGrid {...args} />
      </Box>
    </CustomThemeProvider>
  );
};

const data = generateGridItems(24);

VirtualizedCardGrid.args = {
  data: {
    pages: [
      { items: data, pageIndex: 0, pageSize: data.length, isLoading: false },
    ],
    totalItemCount: data.length,
    totalPageCount: 1,
    pagingMode: "none",
  },
  cardView: {
    xs: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
      },
      getContent: (item: GridData) => {
        return (
          <Box
            sx={{
              p: 1,
              width: 144,
              height: 200,
              backgroundColor: (theme) => theme.palette.grey[300],
              border: (theme) => `1px solid ${theme.palette.grey[600]}`,
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              {item.title}
            </Typography>
            <Typography variant="paragraph" mt={2}>
              {item.description}
            </Typography>
          </Box>
        );
      },
      columnCount: 4,
      columnSpacing: 5,
      rowSpacing: 5,
    },
  },
  displayMode: "card",
};

const meta: Meta<typeof AppGrid> = {
  component: AppGrid,
  title: "AppGrid",
};
export default meta;
