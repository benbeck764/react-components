import React, { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppGrid from "./AppGrid";
import { AppGridProps } from "./AppGrid.props";
import CustomThemeProvider from "@benbeck764/react-components/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, createTheme, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import { TypographySkeleton } from "@benbeck764/react-components/common";

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

const Header: FC = () => {
  return (
    <AppBar sx={{ position: "sticky", height: 56, top: 0 }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography variant="h4">Header</Typography>
      </Stack>
    </AppBar>
  );
};

const Footer: FC = () => {
  return (
    <AppBar sx={{ position: "sticky", height: 87.5, bottom: 0 }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography variant="h4">Footer</Typography>
      </Stack>
    </AppBar>
  );
};

const StyledPageContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default,
  alignItems: "center",
  wrap: "nowrap",
  overflowY: "scroll",
  height: "calc(100vh - 56px - 87.5px - 16px - 16px)", // Height of Header + Footer + PT + PB
  paddingRight: "16px", // Width of scrollbar
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const StyledPageContent = styled(Box)(() => ({
  maxWidth: 1280,
  width: 1280,
}));

export const VirtualizedCardGrid: Story = (args: AppGridProps<GridData>) => {
  const theme = createTheme({});
  return (
    <CustomThemeProvider theme={theme}>
      <Header />
      <StyledPageContainer className="app-content-container">
        <StyledPageContent>
          <Box>
            <AppGrid {...args} />
          </Box>
        </StyledPageContent>
      </StyledPageContainer>
      <Footer />
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
        height: "calc(100vh - 56px - 87.5px - 16px - 16px)",
        loadingPlaceholderOnScroll: true,
      },
      getContent: (item: GridData) => {
        return (
          <Box
            sx={{
              p: 1,
              width: "800px",
              height: "70px",
              backgroundColor: (theme) => theme.palette.grey[300],
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
      columnCount: 1,
      rowSpacing: 3,
      cardSx: { boxShadow: "none" },
      loadingPlaceholder: (
        <Box
          sx={{
            p: 1,
            width: "800px",
            height: "70px",
            backgroundColor: (theme) => theme.palette.grey[300],
          }}
        >
          <TypographySkeleton variant="h6" charCount={10} />
          <TypographySkeleton variant="paragraph" charCount={40} />
        </Box>
      ),
    },
  },
  displayMode: "card",
};

const meta: Meta<typeof AppGrid> = {
  component: AppGrid,
  title: "AppGridVirtualized",
  decorators: [
    (storyFn) => {
      document.documentElement.style.setProperty(
        "background-color",
        "lightgreen"
      );
      document.body.style.setProperty("margin", "0");
      document.body.style.setProperty("overflow", "hidden");
      document.body.style.setProperty("display", "flex");
      document.body.style.setProperty("flex-direction", "row");
      document.body.style.setProperty("min-height", "100vh");

      return storyFn();
    },
  ],
};
export default meta;
