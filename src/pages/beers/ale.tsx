import type { NextPage } from "next";
import { useBeerData } from "../../hooks";
import { Beer } from "../../types";
import { BeerCard, Error, Loading } from "../../components";

const Ale: NextPage = () => {
  const name = "ale";

  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>ale</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id } = beerData;
          return (
            <BeerCard key={`${name}-beer-list-${id}`} beerData={beerData} />
          );
        })}
      </main>
    </div>
  );
};

export default Ale;
