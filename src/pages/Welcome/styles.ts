import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
//import netflixWalpaper from "../../assets/netflix_walpaper.jpg";
import Tv from "../../assets/tv.png";
export const Container = styled.div`
    flex: 1;
    flex-wrap:wrap;
    align-items: center;
    color: white;

`
export const Divisor = styled.div`
  width: 100%;
  border-bottom: 10px solid #222;
`
export const Pattern = styled.div`
  width: 51.8125rem;
  justify-content: center;
  text-align: center;
  margin: 0 25%;
padding: 75px;

`
export const MainHead = styled.div`
  font-size: 3.2rem;
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
height: 3rem;
border-radius: 3px;
`

/*export const EmailInputControl = (EmailInputControlProps) => {
  if EmailInputControl {

  }
}*/

export const EmailInputFalse = styled.input`
width: 75%;
height: 100%;
  background: white;
  padding: 10px;
  font-size: 1rem;
  min-height: 70px;
::placeholder {
  color: #8c8c8c;
}
`
export const EmailInputTrue = styled.input`
width: 75%;
height: 100%;
  background: white;
  padding: 10px;
  font-size: 1rem;
  min-height: 70px;
::placeholder {
  color: #8c8c8c;
}`

export const SignUp = styled.button`
width: 25%;
background-color: red;
color: white;
font-size: 1.875rem;
min-height: 70px;

`
export const Pattern2 = styled.div`
  width: 100%;
  justify-content: flex-start;
  text-align: center;
  margin: 0 25%;
padding: 75px;
flex-direction: row;
`
export const TvImg = styled.img.attrs({
  src: Tv
} as ImgHTMLAttributes<HTMLImageElement>)`
width: 25%;
height:100%;
`