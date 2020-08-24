import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { ImageCard as Card } from '../../_components/card';
import OfficeContext from '../../_context/office-context';

const query = (officeId)=> `
  query {
    paginateProperties(input:{
      officeId: "${officeId}"
    }){
      totalRegisters
      totalResults
      page
      properties{
        id
        code
        operation
        currency
        value
        mainImage
        title
        status
        ubication{ address }
        characteristics{
          id
          name
          value
        }
      }
    }
  }
`
const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`
const NavArrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 250ms ease;
`
const NavNumber = styled(NavArrow)`
  color: #919191;
  margin: 0 1rem;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const SvgCont = styled.svg`
  fill: #919191;
  transition: 250ms ease;
  ${NavArrow}:hover &{
    fill: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const officeId = useContext(OfficeContext).office.officeId;
  const propertyList = useContext(OfficeContext).home.properties.items;
  const properties = [...propertyList, ...propertyList];
  
  const handleQuery = async()=> {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json"  },
      body: JSON.stringify({ query: query(officeId) }),
      mode: 'cors',
    }
    const url = 'http://52.38.140.134:4000/';
    const res = await fetch(url, options);
    const result = await res.json();
  }

  useEffect(()=>{
    //handleQuery();
  },[]);

  return(
    <Container>
      <div style={{ paddingTop: '5rem' }}>
        <Row>
          {
            properties.slice(0, 12).map(p => (
              <Col key={p.mainImage} xs={12} md={3} style={{ margin: "1rem 0" }}>
                <Card {...p} />
              </Col>
            ))
          }
          <Col xs={12}>
            <NavPaginate>
              <NavArrow>
                <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14">
                  <path d="m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"/>                  
                </SvgCont>
              </NavArrow>
              <NavNumber>
                1
              </NavNumber>
              <NavNumber>
                2
              </NavNumber>
              <NavNumber>
                3
              </NavNumber>
              <NavNumber>
                4
              </NavNumber>
              <NavNumber>
                5
              </NavNumber>
              <NavArrow>
                <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14">
                  <path d="m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"/>
                </SvgCont>              
              </NavArrow>
            </NavPaginate>
          </Col>
        </Row>
      </div>
    </Container>
  )
}