import React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/Globalstyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
