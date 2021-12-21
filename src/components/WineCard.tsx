import { Wine } from "../types";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery } = wineData;

  return (
    <div>
      <h1>{wine}</h1>
      <p>{winery}</p>
    </div>
  );
};
