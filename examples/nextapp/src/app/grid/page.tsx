import { AppCard } from "@benbeck764/react-components";
import Grids from "../../components/Grids";
import { Suspense } from "react";
import Await from "./Await";

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // Fake API call (?)
  const promise = new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <AppCard elevation={0} paperSx={{ width: "100%", px: 2, pt: 2, pb: 4 }}>
      <Suspense fallback={<Grids loading={true} />}>
        <Await promise={promise}>{() => <Grids loading={false} />}</Await>
      </Suspense>
    </AppCard>
  );
};

export default Search;
