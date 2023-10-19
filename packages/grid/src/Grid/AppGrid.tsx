"use client";
import Box from "@mui/material/Box";
import { useRef } from "react";
import ReactDOM from "react-dom";
import {
  AppGridDataRequest,
  AppGridDataRequestChangeType,
  AppGridProps,
} from "./AppGrid.props";
import { AppGridPagination } from "./common/AppGridPagination";
import { AppGridTableView } from "./table/AppGridTableView";
import { getIsLoading, getLastPage } from "./utility/grid-helpers";
import { AppGridCardView } from "./card/AppGridCardView";
import { AppGridLoadMore } from "./common/AppGridLoadMore";
import { useBreakpoint } from "@benbeck764/react-components-common";
import AppSelect, { SelectItem } from "@benbeck764/react-components/Select";
import AppTextField from "@benbeck764/react-components/TextField";

function AppGrid<TItem>(props: AppGridProps<TItem>): JSX.Element {
  const breakpointProperties = useBreakpoint();

  const filterInputRef = useRef<HTMLInputElement | null>(null);
  const sortInputRef = useRef<HTMLInputElement | null>(null);

  const oldFilterText = props.data.filterText;
  const placeholderText = props.data.placeholderFilterText;
  const oldSortBy = props.data.sortBy;
  const pagingMode = props.data.pagingMode;
  const totalPageCount = props.data.totalPageCount;

  const lastPage = getLastPage(props);
  const loading = getIsLoading(props);
  const pageSize = lastPage?.pageSize ?? 25;

  const triggerOnDataRequested = (
    newDataRequest: AppGridDataRequest,
    type: AppGridDataRequestChangeType
  ) => {
    props.onDataRequested?.(newDataRequest, type);
  };

  const handleFilterChange = (filterText?: string) => {
    triggerOnDataRequested(
      {
        filterText,
        pageSize,
        pageNumber: 0,
        sortBy: oldSortBy,
      },
      "filter-text-change"
    );
  };

  const handlePagingChange = (pageIndex: number, pageSize: number) => {
    triggerOnDataRequested(
      {
        filterText: oldFilterText,
        pageNumber: pageIndex,
        pageSize,
        sortBy: oldSortBy,
      },
      "pagination-change"
    );
  };

  const handleNextPageRequested = (pageIndex: number) => {
    triggerOnDataRequested(
      {
        filterText: oldFilterText,
        pageNumber: pageIndex,
        pageSize: pageSize,
        sortBy: oldSortBy,
      },
      "next-page-requested"
    );
  };

  const handleSortChange = (selected?: SelectItem<number>) => {
    triggerOnDataRequested(
      {
        filterText: oldFilterText,
        pageSize,
        pageNumber: 0,
        sortBy: selected?.item,
      },
      "sort-by-change"
    );
  };

  const filterInput = (
    <AppTextField
      value={oldFilterText}
      placeholder={placeholderText}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
      ) => handleFilterChange(e?.target?.value)}
      inputRef={filterInputRef}
      sx={props.filterInputSx}
      inputSize="medium"
      {...(props.filterInputIcon && {
        startIcon: props.filterInputIcon,
      })}
      showClearButton
      onClear={() => handleFilterChange("")}
    />
  );

  const sortInput = (
    <AppSelect
      inputRef={sortInputRef}
      items={props.sortItems ?? []}
      defaultValue={props.defaultSortItem}
      inputSize="medium"
      sx={props.sortInputSx}
      onSelected={(selected: SelectItem<number> | undefined) => {
        handleSortChange(selected);
      }}
    />
  );

  let pagination: JSX.Element = <></>;
  if (pagingMode === "pagination" && !loading) {
    pagination = (
      <AppGridPagination
        dataGridProps={props}
        onInit={handlePagingChange}
        onChange={handlePagingChange}
        sx={{ width: "100%", my: 1 }}
      />
    );
  } else if (
    pagingMode === "load-more" &&
    !loading &&
    lastPage &&
    lastPage.pageIndex + 1 < totalPageCount
  ) {
    pagination = (
      <AppGridLoadMore
        pageEndIndex={lastPage.pageIndex ?? 0}
        onNextPageRequested={handleNextPageRequested}
      />
    );
  }

  return (
    <>
      {oldFilterText !== undefined &&
        (props.componentContainers?.filterInputContainer ? (
          ReactDOM.createPortal(
            filterInput,
            props.componentContainers.filterInputContainer
          )
        ) : (
          <Box display="flex" justifyContent="end" sx={{ my: 1 }}>
            <Box sx={{ width: "50%" }}>{filterInput}</Box>
          </Box>
        ))}
      {oldSortBy !== undefined &&
        (props.componentContainers?.sortInputContainer ? (
          ReactDOM.createPortal(
            sortInput,
            props.componentContainers.sortInputContainer
          )
        ) : (
          <Box display="flex" justifyContent="end" sx={{ my: 1 }}>
            <Box sx={{ width: "50%" }}>{sortInput}</Box>
          </Box>
        ))}
      {!loading && props.pagination?.paginationTop && (
        <>
          {props.componentContainers?.paginationContainer
            ? ReactDOM.createPortal(
                pagination,
                props.componentContainers.paginationContainer
              )
            : pagination}
        </>
      )}
      {props.displayMode === "card" ? (
        <AppGridCardView
          dataGridProps={props}
          breakpointProperties={breakpointProperties}
        />
      ) : (
        <AppGridTableView
          dataGridProps={props}
          breakpointProperties={breakpointProperties}
        />
      )}
      {!loading && (
        <>
          {props.componentContainers?.paginationContainer
            ? ReactDOM.createPortal(
                pagination,
                props.componentContainers.paginationContainer
              )
            : pagination}
        </>
      )}
    </>
  );
}

export default AppGrid;
