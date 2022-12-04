import React from "react"
import { Routes } from "./routes"
import { GlobalStyle } from "./styles"

export const App = (): JSX.Element => {
  return (<React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>)
}