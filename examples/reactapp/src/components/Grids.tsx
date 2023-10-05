import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { AppGrid } from "@benbeck764/react-components-grid";

type GridData = {
  title: string;
  description: string;
};

const Grids: FC = () => {
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

  const data = generateGridItems(12);

  return (
    <Box width={800}>
      <Typography variant="h5">Grids</Typography>
      <AppGrid
        data={{
          pages: [
            {
              items: data,
              pageIndex: 0,
              pageSize: data.length,
              isLoading: false,
            },
          ],
          totalItemCount: data.length,
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
        }}
        displayMode="card"
      />
    </Box>
  );
};

export default Grids;
