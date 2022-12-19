import { ImgHTMLAttributes } from "react";
import Logo from "../../assets/netflix_logo.svg";
import styled from "styled-components";
import { BaseButton } from "../BaseButton";
export const Container = styled.div`
width: auto;
height: 70px;
justify-content: space-between;
align-items: center;
flex-direction: row;
display: flex;
`
export const NetflixLogo = styled.img.attrs({
  src: Logo
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 20%;
height: 50px;
`
export const ButtonContainer = styled.div`
width: 30%;
height: 100%;
align-items: center;
justify-content: space-between;
flex-direction: row;
display:flex;
`
export const Button = styled(BaseButton)`
width: 8.2675rem;
height: 2.125rem;
border-radius: 3px;
`


