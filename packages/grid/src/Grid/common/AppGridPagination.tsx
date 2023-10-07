"use client";
import { SxProps, Theme } from "@mui/material/styles";
import AppPagination, {
  AppPaginationProps,
  defaultPageSizeOptions,
} from "../../Pagination/AppPagination";
import { AppGridProps } from "../AppGrid.props";
import { getLastPage } from "../utility/grid-helpers";

export interface AppGridPaginationProps<TItem> {
  dataGridProps: AppGridProps<TItem>;
  onInit: (pageIndex: number, pageSize: number) => void;
  onChange: (pageIndex: number, pageSize: number) => void;
  sx?: SxProps<Theme>;
}

export function AppGridPagination<TItem>(
  props: AppGridPaginationProps<TItem>
): JSX.Element {
  let pageSizeOptions = defaultPageSizeOptions;
  if (props.dataGridProps.pagination?.pageSizeOptions) {
    pageSizeOptions = props.dataGridProps.pagination.pageSizeOptions;
  }

  const lastPage = getLastPage(props.dataGridProps);
  const totalItemCount = props.dataGridProps.data.totalItemCount;

  const pageIndex = lastPage?.pageIndex ?? 0;
  const paginationProps: AppPaginationProps = {
    pageSize: lastPage?.pageSize ?? 25,
    pageIndex: pageIndex,
    totalItemCount: totalItemCount,
    pageSizeOptions: pageSizeOptions,
  };

  paginationProps.onInit = props.onInit;
  paginationProps.onChange = (
    pageIndex: number,
    pageSize: number,
    _eventType: "pageIndex" | "pageSize"
  ) => {
    // if (eventType === 'pageIndex') {
    //   const target =
    //     props.dataGridProps.componentContainers?.scrollTopTarget ??
    //     document.body
    //   window.scrollTo({
    //     top:
    //       target.offsetTop -
    //       theme.custom.headerHeight -
    //       parseInt(theme.spacing(0.5)),
    //     behavior: 'smooth',
    //   })
    // }
    props.onChange?.(pageIndex, pageSize);
  };

  return <AppPagination sx={props.sx} {...paginationProps} />;
}
