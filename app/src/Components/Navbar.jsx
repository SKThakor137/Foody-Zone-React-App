import React from "react";
import styled from "styled-components";

const Navbar = ({searchFood}) => {
  return (
    <TopContainer>
      <div>
        <img src="./Foody Zone.svg" alt="Logo of Food" />
      </div>
      <div className="serch">
        <input type="text" placeholder="Search Food" onChange={searchFood} />
      </div>
    </TopContainer>
  );
};

export default Navbar;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  input {
    border: 1px solid red;
    background-color: transparent;
    padding: 0 10px;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    color: #fff;
  }

  ::placeholder {
    color: white;
  }
@media (0 < width < 600px) {
  flex-direction: column;
  height: 120px;
}

`;
