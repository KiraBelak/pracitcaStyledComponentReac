import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../Lista";

const SContainer = styled.div`
 background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  `

  const SContent = styled.section`
      display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;

  }
  `

const Container = () => {
  return (
    <SContainer>
      <Title>Smart Bank</Title>
      <SContent className="content">
        <Account />
        <List />
      </SContent>
    </SContainer>
  );
};

export default Container;
