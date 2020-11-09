import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import OfficeContext from '../../_context/office-context';
import { Button } from '../../_components/buttons';
import { navigate } from "gatsby";

const SectionCont = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
`
const SectionText = styled.p`
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`

export default ()=> {
  //const sectionText = useContext(OfficeContext).home.contact.title;
  return(
    <SectionCont>
      <Container>
        <Row align="center">
          <Col xs={12} md={9}>
            <SectionText>
              ¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.
            </SectionText>          
          </Col>
          <Col xs={12} md={3}>
            <Button outlined primary block onClick={()=> navigate("/contact")}>
              Contáctanos
            </Button>
          </Col>
        </Row>
      </Container>
    </SectionCont>
  )
}