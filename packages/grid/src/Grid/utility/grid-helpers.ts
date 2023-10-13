import { AppGridData, AppGridDataPage, AppGridProps } from "../AppGrid.props";

const getLoadingPageSize = (pageSize: number): number =>
  pageSize === 0 ? 25 : pageSize;

export function getItems<TItem>(
  data: AppGridData<TItem>
): { item: TItem | undefined; isLoading: boolean }[] {
  return [...data.pages]
    .sort(
      (a: AppGridDataPage<TItem>, b: AppGridDataPage<TItem>) =>
        a.pageIndex - b.pageIndex
    )
    .flatMap((p: AppGridDataPage<TItem>) =>
      p.isLoading
        ? Array.from(Array(getLoadingPageSize(p.pageSize))).map(() => ({
            item: undefined,
            isLoading: true,
          }))
        : (p.items.map((item: TItem) => ({ item, isLoading: false })) as {
            item: TItem | undefined;
            isLoading: boolean;
          }[])
    );
}

export function getHasItems<TItem>(props: AppGridProps<TItem>): boolean {
  return (
    props.data.pages.filter(
      (p: AppGridDataPage<TItem>) => p.items.length || p.isLoading
    ).length > 0
  );
}

type Page = {
  pageIndex: number;
  pageSize: number;
  isLoading: boolean;
};

export function getLastPage<TItem>(
  props: AppGridProps<TItem>
): Page | undefined {
  const pages: Page[] = props.data.pages.map((p: AppGridDataPage<TItem>) => ({
    pageIndex: p.pageIndex,
    pageSize: p.pageSize,
    isLoading: p.isLoading,
  }));

  return [...pages].sort((a, b) => a.pageIndex - b.pageIndex).pop();
}

export function getIsLoading<TItem, TAppState>(
  props: AppGridProps<TItem>
): boolean {
  const page = getLastPage(props);
  return page?.isLoading === true;
}
