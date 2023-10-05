import {
  SelectChangeEvent,
  Typography,
  SxProps,
  Theme,
  Stack,
  Grid,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import usePagination from "@mui/material/usePagination/usePagination";
import { FC, useEffect } from "react";
import {
  StyledEllipsis,
  StyledLabel,
  StyledMenuItem,
  StyledPageButtonSelected,
  StyledPageButtonUnselected,
  StyledPageClickerButton,
  StyledSelect,
  StyledUnderline,
} from "./AppPagination.styles";
import { useBreakpoint } from "@react-components/common";

export const defaultPageSizeOptions = [25, 50, 100, 250];

export interface AppPaginationProps {
  pageIndex: number;
  pageSize: number;
  totalItemCount: number;
  pageSizeOptions?: number[];
  startingPageIndex?: number;
  siblingCount?: number;
  onInit?: (pageIndex: number, pageSize: number) => void;
  onChange?: (
    pageIndex: number,
    pageSize: number,
    eventType: "pageIndex" | "pageSize"
  ) => void;
  sx?: SxProps<Theme>;
}

const AppPagination: FC<AppPaginationProps> = (props: AppPaginationProps) => {
  const { breakpoint } = useBreakpoint();
  const pageSizeOptions = props.pageSizeOptions ?? defaultPageSizeOptions;
  const selectedPageSize =
    pageSizeOptions.find((pageSize: number) => props.pageSize <= pageSize) ??
    pageSizeOptions[0];

  const totalPages = Math.ceil(props.totalItemCount / selectedPageSize);

  const pagination = usePagination({
    count: totalPages,
    page: props.pageIndex + 1,
    boundaryCount: 1,
    siblingCount: props.siblingCount ?? 2,
    onChange: (_event, page) => {
      const pageIndex = page - 1;
      props.onChange?.(pageIndex, props.pageSize, "pageIndex");
    },
  });

  useEffect(() => {
    props.onInit?.(props.pageIndex, props.pageSize);
  }, []);

  const resultsPerPageText =
    breakpoint === "lg" || breakpoint === "xl"
      ? "Results Per Page:"
      : "Per Page:";
  const ResultPerPage = (
    <Stack direction="row" alignItems="center" justifyContent="flex-start">
      <StyledLabel sx={{ mr: 1 }}>{resultsPerPageText}</StyledLabel>
      <StyledSelect
        variant="standard"
        disableUnderline
        value={selectedPageSize}
        onChange={(event: SelectChangeEvent<unknown>) => {
          const pageIndex = 0;
          const pageSize = event.target.value as number;
          props.onChange?.(pageIndex, pageSize, "pageSize");
        }}
      >
        {pageSizeOptions.map((pageSize: number) => (
          <StyledMenuItem value={pageSize} key={pageSize}>
            {pageSize}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </Stack>
  );

  const PaginationButtons = (
    <Stack direction="row" alignItems="center" justifyContent="center">
      {pagination.items.map(({ page, type, selected, ...item }) => {
        let children = null;
        const key = type + page;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = <StyledEllipsis key={key}>…</StyledEllipsis>;
        } else if (type === "page") {
          children = selected ? (
            <StyledPageButtonSelected key={key} {...item}>
              {page}
              <StyledUnderline />
            </StyledPageButtonSelected>
          ) : (
            <StyledPageButtonUnselected key={key} {...item}>
              {page}
            </StyledPageButtonUnselected>
          );
        } else if (type === "previous") {
          children = (
            <StyledPageClickerButton
              key={key}
              {...item}
              startIcon={<ChevronLeftIcon fontSize="small" color="inherit" />}
            >
              <Typography variant="paragraphSmall">Previous</Typography>
            </StyledPageClickerButton>
          );
        } else if (type === "next") {
          children = (
            <StyledPageClickerButton
              key={key}
              {...item}
              endIcon={<ChevronRightIcon fontSize="small" color="inherit" />}
            >
              <Typography variant="paragraphSmall">Next</Typography>
            </StyledPageClickerButton>
          );
        }

        return children;
      })}
    </Stack>
  );

  const totalItemsText =
    breakpoint === "lg" || breakpoint === "xl"
      ? `Showing 
  ${Math.min(selectedPageSize * props.pageIndex + 1, props.totalItemCount)}
  -
  ${Math.min(selectedPageSize * (props.pageIndex + 1), props.totalItemCount)}
  of ${props.totalItemCount} Item${props.totalItemCount === 1 ? "" : "s"}`
      : `(${Math.min(
          selectedPageSize * props.pageIndex + 1,
          props.totalItemCount
        )}
      -
      ${Math.min(
        selectedPageSize * (props.pageIndex + 1),
        props.totalItemCount
      )}
      of ${props.totalItemCount})`;

  const TotalItems = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      height="100%"
    >
      <Typography
        variant="paragraphSmallBold"
        sx={{ color: (theme) => theme.palette.coolGrey[500] }}
      >
        {totalItemsText}
      </Typography>
    </Stack>
  );

  return (
    <Grid container pt={1} px={2} sx={props.sx}>
      {(breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md") && (
        <>
          <Grid item xs={6} sm={6} md={6}>
            {ResultPerPage}
          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            {TotalItems}
          </Grid>

          <Grid item xs={12} sm={12} md={12} my={1}>
            {PaginationButtons}
          </Grid>
        </>
      )}

      {(breakpoint === "lg" || breakpoint === "xl") && (
        <>
          <Grid item lg={3} xl={3}>
            {ResultPerPage}
          </Grid>

          <Grid item lg={6} xl={6}>
            {PaginationButtons}
          </Grid>

          <Grid item lg={3} xl={3}>
            {TotalItems}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AppPagination;
