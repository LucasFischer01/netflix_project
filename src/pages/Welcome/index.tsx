import React from "react";
import { AuthHeader } from "../../components/AuthHeader";
import { Button } from "../../components/BaseButton/styles";
import { Container } from "./styles";
export interface WelcomeProps {

};
export const Welcome = ({

}: WelcomeProps): JSX.Element => {
  return (
    <>
      <Container>
        <AuthHeader />
      </Container>
    </>
  )
};

