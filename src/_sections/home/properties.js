import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import OfficeContext from '../../_context/office-context';
import { ImageCardCarousel } from '../../_components/card'
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';

const MainSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
  &::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: ${props => props.theme.primaryColor};
  }
`
const TitleSection = styled.h2`
  margin: 0;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; 
  color: ${props => props.theme.secondaryColor};
  text-align: center;
`
const FooterSection = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 1rem 0;
  @media(min-width: 768px){
    text-align: left;
  }
`

export default ()=> {
  const properties = useContext(OfficeContext).home.properties.items;
  return(
    <Fragment>
    <MainSection>
      <Container>
        <TitleSection>
          <img src="/marker.svg" style={{ marginBottom: "1rem" }} />
          Contamos con una seleción exclusiva de propiedades.
        </TitleSection>
        <ImageCardCarousel items={properties} />
      </Container>
    </MainSection>
    <FooterSection>
      <Container>
        <Row align="center">
          <Col xs={12} md={9}>
            <h3>Estas son solo algunas de las propiedades que tenemos para ofrecerte</h3>
          </Col>
          <Col xs={12} md={3}>
            <Button outlined primary block>Ver todas las propiedades</Button>
          </Col>          
        </Row>
      </Container>
    </FooterSection>
    </Fragment>
  )
}