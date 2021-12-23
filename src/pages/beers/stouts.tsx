import type { NextPage } from "next";
import BeerCardList from "../../components/BeerCardList";

const Stouts: NextPage = () => {
  const name = "stouts";

  return (
    <div>
      <BeerCardList name={name} />
    </div>
  );
};

export default Stouts;
