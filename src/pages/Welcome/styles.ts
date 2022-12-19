import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import netflixWalpaper from "../../assets/netflix_walpaper.jpg";
import Tv from "../../assets/tv.png";
import Mobile from "../../assets/mobile-0819.jpg"
import Multi from "../../assets/device-pile.png"
import Kids from "../../assets/kids-logo.png"
export const Container = styled.div`
    flex: 1;
    flex-wrap:wrap;
    align-items: center;
    color: white;

`
export const Divisor = styled.div`
  width: 100%;
  border-bottom: 10px solid #222;
  align-items: center;
`
export const Pattern = styled.div`
  display: flex;
  margin: auto;
  width: 65%;
  text-align: center;
  padding: 75px;
  flex-direction: column;
`
export const TxtSpace = styled.div`
padding: 0.5rem 0 ;
`
// export const BackGroundImg = styled.img.attrs({
//   src: netflixWalpaper
// } as ImgHTMLAttributes<HTMLImageElement>)`
// background-position-x:center;
// background-size:cover;
// background-repeat: no-repeat;
// display: flex;
// `

export const MainHead = styled.div`
  font-size: 3rem;
  font-weight: 700;
`
export const Head = styled.div`
  font-size: 1.625rem;
  font-weight: 400;

`
export const Subtitle = styled.div`
  font-size: 1.24rem;
`
export const Subscribe = styled.div`
display:flex;
width: 100%;
height: 70px;
`

export const EmailInputFalse = styled.input`
width: 75%;
height: 100%;
border-radius: 3px 0 0 3px;
  background: white;
  padding: 10px;
  font-size: 1rem;
::placeholder {
  color: #8c8c8c;
}
`

export const SignUp = styled.button`
width: 25%;
height: 100%;
border-radius: 0 3px 3px 0;
background-color: red;
color: white;
font-size: 1.875rem;

`
export const Pattern2 = styled.div`
  width: 0 auto;
  margin: 0 14.28%;
  padding: 75px 0;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  align-items: center;
`
export const TextPattern = styled.div`
align-self: center;
margin-left: 1rem;
  text-align: left;
`
export const TvImg = styled.img.attrs({
  src: Tv
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 100%;
max-width:  530px;
`

export const MobileImg = styled.img.attrs({
  src: Mobile
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 100%;
max-width:  530px;
`
export const MultiDevice = styled.img.attrs({
  src: Multi
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 100%;
max-width:  530px;
`
export const KidsLogo = styled.img.attrs({
  src: Kids
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 100%;
max-width:  530px;
`