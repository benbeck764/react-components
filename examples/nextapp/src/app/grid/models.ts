export type GridData = {
  title: string;
  description: string;
};

export type ResponseDto = {
  currentPageNumber: number;
  numberOfPages: number;
  pageSize: number;
  totalItems: number;
  items: GridData[];
};
