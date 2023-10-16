import { AppCard } from "@benbeck764/react-components";
import Grids from "../../components/Grids";
import { Suspense } from "react";
import Await from "./Await";
import { ResponseDto } from "./models";

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // Mock API call
  const totalItems = 12;
  const promise = new Promise<ResponseDto>((resolve) =>
    setTimeout(
      () =>
        resolve({
          currentPageNumber: 0,
          numberOfPages: 1,
          pageSize: totalItems,
          totalItems: totalItems,
          items: Array.from(Array(totalItems).keys()).map((num: number) => {
            return {
              title: `Grid Item #${num + 1}`,
              description: `This right here is the description for Grid Item #${
                num + 1
              }.`,
            };
          }),
        }),
      2000
    )
  );

  return (
    <AppCard paperSx={{ width: "100%", px: 2, pt: 2, pb: 4 }}>
      <Suspense fallback={<Grids data={undefined} loading={true} />}>
        <Await promise={promise}>
          {(res: ResponseDto) => <Grids data={res} loading={false} />}
        </Await>
      </Suspense>
    </AppCard>
  );
};

export default Search;
