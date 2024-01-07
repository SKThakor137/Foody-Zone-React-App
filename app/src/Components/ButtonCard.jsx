import React from "react";
import styled from "styled-components";

const ButtonCard = ({ filterFood, selectedBtn }) => {
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  return (
    <NavbarButton>
      {filterBtns.map((value) => (
        <Button
          isSelected={selectedBtn === value.type}
          key={value.name}
          onClick={() => filterFood(value.type)}
        >
          {value.name}
        </Button>
      ))}
    </NavbarButton>
  );
};

export default ButtonCard;

const NavbarButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  color: white;
  padding: 8px 12px;
  border: 1px solid white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  background-color: ${({ isSelected }) => (isSelected ? "#f71919" : "#fb5757")};

  &:hover {
    background: #f71919;
  }
`;
