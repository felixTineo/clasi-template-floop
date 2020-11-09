import React, { useContext } from 'react';
import Context from '../../_context/office-context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Contact from '../home/contact';
import noData from '../../_context/state';

const MainCont = styled.section`
  padding: 4rem 0;
`
const Title = styled.p`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`
const Map = styled.img`
  width: 100%;
  height: 304px;
  object-position: center;
  object-fit: cover;
`

export default ()=> {
  const state = useContext(Context).about.ubication;
  return(
    <MainCont>
      <Title>
        {state.title ? state.title : noData.about.ubication.title}
      </Title>
      <Map src="/map.png" />
      <Container>
        <Row>
          <Col xs={12}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}