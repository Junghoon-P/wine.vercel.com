import type { NextPage } from "next";
import { useWineData } from "../../hooks";
import { Wine } from "../../types";
import { WineCard, Error, Loading } from "../../components";

const Sparkling: NextPage = () => {
  const name = "sparkling";
  //useSwr은 hooks이기 때문에 CSR에서만 가능하다. SSR 불가
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Sparkling</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id } = wineData;
          return <WineCard key={`port-wine-list-${id}`} wineData={wineData} />;
        })}
      </main>
    </div>
  );
};

export default Sparkling;
