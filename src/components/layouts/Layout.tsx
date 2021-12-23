import React from "react";
import { Navigation } from "./Navigation";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`;
