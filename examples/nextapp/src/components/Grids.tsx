"use client";
import { FC, useEffect, useState } from "react";
import { AppGrid, AppGridDataRequest } from "@benbeck764/react-components-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypographySkeleton } from "@benbeck764/react-components";

type GridData = {
  title: string;
  description: string;
};

const Grids: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataRequest, setDataRequest] = useState<AppGridDataRequest>({
    pageNumber: 0,
    pageSize: 4,
  });

  const totalItems = 12;
  const items = Array.from(Array(totalItems).keys()).map((num: number) => {
    return {
      title: `Grid Item #${num + 1}`,
      description: `This right here is the description for Grid Item #${
        num + 1
      }.`,
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const onDataRequested = (request: AppGridDataRequest): void => {
    setDataRequest(request);
  };

  return (
    <Box width={800}>
      <Typography variant="h5">Grids</Typography>
      <AppGrid
        data={{
          pages: loading
            ? [
                {
                  items: [],
                  pageIndex: 0,
                  pageSize: dataRequest.pageSize,
                  isLoading: true,
                },
              ]
            : [
                {
                  items: items.slice(
                    dataRequest.pageNumber * dataRequest.pageSize,
                    Math.min(
                      dataRequest.pageNumber * dataRequest.pageSize +
                        dataRequest.pageSize,
                      totalItems
                    )
                  ),
                  pageIndex: dataRequest.pageNumber,
                  pageSize: dataRequest.pageSize,
                  isLoading: false,
                },
              ],
          totalItemCount: totalItems,
          totalPageCount: Math.ceil(totalItems / dataRequest.pageSize),
          pagingMode: "pagination",
        }}
        pagination={{ pageSizeOptions: [4, 8, 12] }}
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
            loadingPlaceholder: (
              <Box
                sx={{
                  p: 1,
                  width: 184,
                  height: 200,
                  backgroundColor: (theme) => theme.palette.grey[300],
                  border: (theme) => `1px solid ${theme.palette.grey[600]}`,
                }}
              >
                <TypographySkeleton charCount={12} variant="h6" />
                <Box mt={2}>
                  <TypographySkeleton charCount={15} variant="paragraph" />
                  <TypographySkeleton charCount={15} variant="paragraph" />
                  <TypographySkeleton charCount={15} variant="paragraph" />
                </Box>
              </Box>
            ),
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
        displayMode="card"
        onDataRequested={onDataRequested}
      />
    </Box>
  );
};

export default Grids;
