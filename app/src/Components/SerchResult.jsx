import React from "react";
import { BASE_URL, Container } from "../App";
import styled from "styled-components";
import { Button } from "./ButtonCard";

const SerchResult = ({ data }) => {
  return (
    <div>
      <FoodCardsContainer>
        <Container>
          <FoodCards>
            {data?.map(({ name, price, text, image, type }) => (
              <FoodCard key={name}>
                <div className="food_image">
                  <img src={BASE_URL + image} alt="Image of Food" />
                </div>
                <div className="food_info">
                  <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <Button>${price.toFixed(2)}</Button>
                </div>
              </FoodCard>
            ))}
          </FoodCards>
        </Container>
      </FoodCardsContainer>
    </div>
  );
};

export default SerchResult;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCards = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
row-gap: 30px;
column-gap: 20px;
padding-top: 80px;
`;

const FoodCard = styled.section`
 border-radius: 20px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>), lightgray 0% 0% / 50px 50px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13px);

  width: 340px;
  height: 167px;
  padding: 8px;

  display: flex;

  .food_info{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
margin-left: 10px;

h3{
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
}
p{
  margin-top: 4px;
  font-size: 12px;
}
button{
  font-size: 12px;
}

}
`;
