import React, { useEffect } from 'react';
import data from '../_context/state';
import OfficeContext from '../_context/office-context';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import './index.css';
import "animate.css";

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    padding-top: 89px;
  }
`

export default ({ children })=> {

  /*useEffect(()=>{
    const favicon = document.getElementById('favicon');
    document.title = data.webOffice.office.title;
    favicon.href = data.webOffice.office.favicon;
  },[])*/
  
  return(
    <OfficeContext.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </OfficeContext.Provider>
  )
}