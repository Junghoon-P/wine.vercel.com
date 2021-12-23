import { Wine } from "../types";
import styled from "@emotion/styled";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, image, location, rating } = wineData;

  return (
    <Container>
      <img src={image} alt="Wine-Picture" />
      <h2>
        {wine}
        <Average>{rating.average}</Average>
      </h2>
      <p>
        {winery} - {location}
      </p>
      별점 :{rating.reviews.replace(" ratings", "")}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //빈이미지 있어도 있는 것처럼 처리
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;

// const ImageContainer = styled.div`
//   width: 100%;
// `;

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 14px;
  color: white;
  margin: 0 0.5em;
  background-color: #2ac1bc;
  border-radius: 3px;
`;
