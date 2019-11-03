import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 40px auto 20px auto;
  max-width: 755px;
`;

const CardsContainer = styled.div`
  margin: 40px auto;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <SearchContainer className="SearchContainer"></SearchContainer>
      <CardsContainer className="CardsContainer"></CardsContainer>
    </>
  );
}

export default HomePage;
