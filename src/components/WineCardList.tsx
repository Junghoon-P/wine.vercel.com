import { useWineData } from "../hooks";
import { Wine } from "../types";
import { WineCard, Error, Loading } from "../components";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface WineCardListProps {
  name: string;
}

const WineCardList = ({ name }: WineCardListProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <WineTitle>Port</WineTitle>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          const { id } = wineData;
          return (
            <WineCard key={`${name}-wine-list-${id}`} wineData={wineData} />
          );
        })}
      </WineCardContainer>
    </div>
  );
};

export default WineCardList;

const WineTitle = styled.h1`
  line-height: 180%;
`;

const WineCardContainer = styled.main`
  display: grid;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
