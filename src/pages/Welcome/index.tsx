import React from "react";
import { AuthHeader } from "../../components/AuthHeader";
import { Button } from "../../components/BaseButton/styles";
import { Divisor, Container, MainHead, Head, Subtitle, Pattern, SignUp, Subscribe, EmailInputFalse, Pattern2, TvImg, TextPattern, MobileImg, MultiDevice, KidsLogo, TxtSpace, /*BackGroundImg*/ } from "./styles";
export interface WelcomeProps {

};
export const Welcome = ({

}: WelcomeProps): JSX.Element => (
  <Container>
    <Divisor>
      {//<BackGroundImg
      }
      <AuthHeader />
      <Pattern>
        <MainHead>Acesso ilimitado a séries e filmes e muito mais.</MainHead>
        <TxtSpace>
          <Head>Veja em qualquer lugar. Cancele quando quiser.</Head>
        </TxtSpace>
        <TxtSpace>
          <Subtitle>Quer começar a ver? Introduza o seu e-mail para criar ou reativar a sua conta.</Subtitle>
        </TxtSpace>
        <Subscribe>
          <EmailInputFalse placeholder="Endereço de e-mail" />
          <SignUp>Começar</SignUp>
        </Subscribe>
      </Pattern>
    </Divisor>
    <Divisor>

      <Pattern2>
        <TextPattern>
          <MainHead>Veja a Netflix no seu televisor.</MainHead>
          <Head>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, leitores de Blu-ray e muito mais.</Head>
        </TextPattern>
        <TvImg />
      </Pattern2>

    </Divisor>
    <Divisor>
      <Pattern2>
        <MobileImg />
        <TextPattern>
          <MainHead>Transfira os seus programas para ver offline.</MainHead>
          <Head>Guarde os seus favoritos e tenha sempre algo para ver.</Head>
        </TextPattern>
      </Pattern2>
    </Divisor>
    <Divisor>
      <Pattern2>
        <TextPattern>
          <MainHead>Veja onde quiser.</MainHead>
          <Head>Veja em streaming com acesso ilimitado a séries e filmes no seu telemóvel, tablet, computador e televisor, sem ter de pagar mais.</Head>
        </TextPattern>
        <MultiDevice />
      </Pattern2>
    </Divisor>
    <Divisor>
      <Pattern2>
        <KidsLogo />
        <TextPattern>
          <MainHead>Crie perfis para crianças.</MainHead>
          <Head>As crianças também poderão descobrir novas aventuras e encontrar os seus personagens favoritos num espaço dedicado, que está incluído na sua adesão.</Head>
        </TextPattern>
      </Pattern2>
    </Divisor>
    <Divisor>
      <Pattern>
        <MainHead>Perguntas frequentes</MainHead>
      </Pattern>
    </Divisor>
  </Container>

);

