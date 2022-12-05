import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import { BaseButton } from "../BaseButton";
export const Container = styled.div`
width: 100%;
height: 70px;
justify-content: space-between;
align-items: center;
flex-direction: row;
`
export const Button = styled(BaseButton)`
width: 20%;
border-radius: 5px;
`
export const NetflixLogo = styled.img.attrs((NetflixLogoProps): JSX.Element => {
  src: '../../assets/netflix_logo.svg'
})
