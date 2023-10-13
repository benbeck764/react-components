"use client";
import { FC, useEffect, useState } from "react";
import { AppGrid, AppGridDataRequest } from "@benbeck764/react-components-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypographySkeleton } from "@benbeck764/react-components";
import { GridData, ResponseDto } from "../app/grid/models";

type GridProps = {
  data: ResponseDto | undefined;
  loading: boolean;
};

const Grids: FC<GridProps> = (props: GridProps) => {
  const { data, loading } = props;

  const onDataRequested = (request: AppGridDataRequest): void => {
    //setDataRequest(request);
  };

  return (
    <Box width={800}>
      <Typography variant="h5">Grids</Typography>
      <AppGrid
        data={{
          pages:
            !data || loading
              ? [
                  {
                    items: [],
                    pageIndex: 0,
                    pageSize: 12,
                    isLoading: true,
                  },
                ]
              : [
                  {
                    items: data.items,
                    pageIndex: data.currentPageNumber,
                    pageSize: data.pageSize,
                    isLoading: false,
                  },
                ],
          totalItemCount: data?.totalItems ?? 0,
          totalPageCount: data?.numberOfPages ?? 0,
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
            columnCount: 2,
            columnSpacing: 2,
            rowSpacing: 2,
          },
          xl: {
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
                loadingPlaceholder: (
                  <TypographySkeleton charCount={15} variant="paragraph" />
                ),
              },
              {
                title: "Column 2",
                width: "50%",
                value: (props) => (
                  <Typography variant="paragraph">{`Column 2: ${props.itemIndex}`}</Typography>
                ),
                loadingPlaceholder: (
                  <TypographySkeleton charCount={15} variant="paragraph" />
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
