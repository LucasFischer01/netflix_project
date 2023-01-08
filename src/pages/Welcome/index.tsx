import React from "react";
import { Disclosure } from "../../components";
import { AuthHeader } from "../../components/AuthHeader";
import { Button } from "../../components/BaseButton/styles";
import { DisclosureContainer } from "../../components/Disclosure/styles";
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
        <Disclosure
          title="O que é a Netflix?"
          content="Netflix é um serviço de streaming que oferece uma grande variedade de séries de televisão, filmes, títulos de animé, documentários e outros conteúdos premiados que podem ser vistos em milhares de dispositivos com uma ligação à internet.\n
          Pode ver tudo o que quiser, quando quiser, sem anúncios. Tudo por um baixo custo mensal. Há sempre novos conteúdos para descobrir e todas as semanas são adicionados novos filmes e séries!"
        ></Disclosure>
      </Pattern>
    </Divisor>
  </Container>

);

