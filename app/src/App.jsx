import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import SerchResult from "./Components/SerchResult";
import ButtonCard from "./Components/ButtonCard";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable Fetch Data");
      }
    };
    fetchFoodData();
  }, []);

  // searchFood
  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchFood === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  // filterFoodButton

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <Navbar searchFood={searchFood} />
        <ButtonCard filterFood={filterFood} selectedBtn={selectedBtn} />
      </Container>
      <SerchResult data={filterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
