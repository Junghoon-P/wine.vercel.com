import { useWineData } from "../hooks";
import { Wine } from "../types";
import { WineCard, Error, Loading } from "../components";

interface WineCardListProps {
  name: string;
}

const WineCardList = ({ name }: WineCardListProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Port</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id } = wineData;
          return (
            <WineCard key={`${name}-wine-list-${id}`} wineData={wineData} />
          );
        })}
      </main>
    </div>
  );
};

export default WineCardList;
