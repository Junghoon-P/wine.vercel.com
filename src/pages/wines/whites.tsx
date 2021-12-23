import type { NextPage } from "next";
import WineCardList from "../../components/WineCardList";

const Port: NextPage = () => {
  const name = "whites";

  return (
    <>
      <WineCardList name={name} />
    </>
  );
};

export default Port;
