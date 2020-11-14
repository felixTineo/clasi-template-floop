import React, { useLayoutEffect, useCallback, useState, useEffect } from 'react';
import dataTest from '../_context/state';
import OfficeContext from '../_context/office-context';
import styled, { ThemeProvider } from 'styled-components';
import LoaderScreen from '../_components/LoaderScreen';
import Header from './header';
import Footer from './footer';
import { useQueryParam } from "gatsby-query-params";
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

//const dataUrl = "https://api.clasihome.com/rest/builders?builderId=5fa577e57cf0c90a603a23cf";
//const propertiesUrl = "https://api.clasihome.com/rest/properties?typeId=office&id=5e8e36b31c9d440000d35090&status=PUBLICADA";

export default ({ children })=> {
  const builderId = useQueryParam('builderId');
  const [data, setData] = useState(null);
  console.log("BUILDER ID",builderId);
  const handleData = useCallback(async()=> {
    const dataUrl = `https://api.clasihome.com/rest/builders?builderId=${builderId}`;
    const data = await fetch(dataUrl);
    const result = await data.json();
    console.log("RESULT", result);
    const dataProperties = await fetch(`https://api.clasihome.com/rest/properties?typeId=office&id=${result.office}&status=PUBLICADA&limit=6`);
    const resultProperties = await dataProperties.json();
    console.log("PROPERTIES", resultProperties);
    if(result.home) {
      result.home.properties.items = resultProperties.properties;
      result.home.properties.paginateProperties = resultProperties;
    };
    setData(result);
  },[builderId]);

  useLayoutEffect(()=> {
    handleData();
  },[builderId]);

  /*useEffect(()=>{
    const favicon = document.getElementById('favicon');
    document.title = data.webOffice.office.title;
    favicon.href = data.webOffice.office.favicon;
  },[])*/

  if(!data) return <LoaderScreen />
  
  return(
    <OfficeContext.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Header builderId={builderId} />
          <Body>
            {children}
          </Body>
          <Footer builderId={builderId} />
        </Layout>
      </ThemeProvider>
    </OfficeContext.Provider>
  )
}