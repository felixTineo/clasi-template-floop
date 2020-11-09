import React, { useLayoutEffect, useCallback, useState } from 'react';
//import { useStaticQuery } from 'gatsby';
import dataTest from '../_context/state';
import OfficeContext from '../_context/office-context';
import styled, { ThemeProvider } from 'styled-components';
import LoaderScreen from '../_components/LoaderScreen';
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

const dataUrl = "https://api.clasihome.com/rest/builders?builderId=5fa577e57cf0c90a603a23cf";
const propertiesUrl = "https://api.clasihome.com/rest/properties?typeId=office&id=5e8e36b31c9d440000d35090&status=PUBLICADA";

export default ({ children })=> {

  /*const gatsbyRepoData = useStaticQuery(graphql`
  {
    data {
      id
    }
  }

`);*/

  const [data, setData] = useState(null);

  const handleData = useCallback(async()=> {
    const data = await fetch(dataUrl);
    const result = await data.json();
    const dataProperties = await fetch(propertiesUrl);
    const resultProperties = await dataProperties.json();
    console.log("PROPERTIES", resultProperties);
    result.home.properties.items = resultProperties.properties;
    setData(result);
  },[]);

  useLayoutEffect(()=> {
    handleData();
  },[]);

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