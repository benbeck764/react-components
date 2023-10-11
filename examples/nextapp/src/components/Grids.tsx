"use client";
import { FC } from "react";
import { AppGrid } from "@benbeck764/react-components-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type GridData = {
  title: string;
  description: string;
};

const Grids: FC = () => {
  return (
    <Box width={800}>
      <Typography variant="h5">Grids</Typography>
      <AppGrid
        data={{
          pages: [
            {
              items: Array.from(Array(12).keys()).map((num: number) => {
                return {
                  title: `Grid Item #${num + 1}`,
                  description: `This right here is the description for Grid Item #${
                    num + 1
                  }.`,
                };
              }),
              pageIndex: 0,
              pageSize: 12,
              isLoading: false,
            },
          ],
          totalItemCount: 12,
          totalPageCount: 1,
          pagingMode: "none",
        }}
        cardView={{
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
                    width: 184,
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
            columnSpacing: 3,
            rowSpacing: 3,
          },
        }}
        tableView={{
          xs: {
            virtualizedProps: {
              enabled: true,
              useWindowScroll: true,
            },
            columns: [
              {
                title: "Column 1",
                width: "50%",
                value: (props) => (
                  <Typography variant="paragraph">{`Column 1: ${props.itemIndex}`}</Typography>
                ),
              },
              {
                title: "Column 2",
                width: "50%",
                value: (props) => (
                  <Typography variant="paragraph">{`Column 2: ${props.itemIndex}`}</Typography>
                ),
              },
            ],
            showHeader: true,
          },
        }}
        displayMode="table"
      />
    </Box>
  );
};

export default Grids;
