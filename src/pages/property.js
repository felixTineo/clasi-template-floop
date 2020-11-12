import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import Layout from '../_layout';
import styled from 'styled-components';
import Hero from '../_sections/property/hero';
import PropertyUser from '../_sections/property/property-user';
import Ubication from '../_sections/property/ubication';
import Properties from '../_sections/home/properties';
import { Row, Col, Container, Visible } from 'react-grid-system';
import User from '../_sections/property/property-user/user';
import noData from '../_context/state';
import { useQueryParam } from "gatsby-query-params";
import { LoadingOutlined } from '@ant-design/icons';

const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryColor};
  font-size: 3rem;
  min-height: calc(100vh - 108px);
`

export default ({ location })=> {

  const [state, setState] = useState(null);
  const propertyId = useQueryParam("propertyId");
  const getProperty = useCallback(async()=> {
    const data = await fetch(`https://api.clasihome.com/rest/properties?propertyId=${propertyId}`);
    const result = await data.json();
    console.log("PROPERTY QUERY", result);
    setState(result);
  },[propertyId]);

  useLayoutEffect(()=> {
    getProperty();
  },[propertyId]);
  
  if(!state) return (
    <Layout>
      <LoadingCont>
        <LoadingOutlined />
      </LoadingCont>
    </Layout>
  )
  return (
    <Layout>
      <Hero state={state} />
      <PropertyUser state={state} />
      <Ubication />
      <Properties />
      <Visible xs>
        <Container>
          <Row>
            <Col xs={12}>
              <User description={state} />
            </Col>
          </Row>
        </Container>
    </Visible>*
    </Layout>
  )
}