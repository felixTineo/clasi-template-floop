import React, { useContext } from 'react';
import styled from 'styled-components';
import OfficeContext from '../../_context/office-context';
import { TextCardCarousel } from '../../_components/card'
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';

const MainSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
  background-color: #fff;
  &::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: #F2F2F2;
  }
`
const InnerContainer = styled.div`
  height: 100vh;
  @media(min-width: 768px){
    height: 85vh;
  }
`;
const ServiceInfo = styled.div`
  position: relative; 
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const InfoCont = styled.div`
  width: 100%;
  padding: 1rem;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    width: 50%;
  }    
`
const Info = styled.h1`
  color: #fff;
  font-family: "open sans";
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  margin: 0;
  @media(min-width: 768px){
    font-size: 3rem;
  }
`
const SubInfo = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonCont = styled.div`
  width: 50%;
`

const ServiceImage = styled.div`
  position: relative;
  background-image: url(${props => props.theme.serviceUrl});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 100vh;
  z-index: 0;
  &::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)), linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5));
  }  
  @media(min-width: 768px){
    padding-top: 56.25%;
  }
`
const SubTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
const SubTitle = styled.h2`
  color: ${props => props.theme.primaryColor};
  text-align: center;
  width: 50%;
`
const Strong = styled.strong`
  font-weight: 900;
  font-family: "Lexend Deca";
`

export default ()=> {
  const services = useContext(OfficeContext).webOffice.home.service;
  const info = useContext(OfficeContext).webOffice.home.about;
  return(
    <MainSection>
      <Container>
        <InnerContainer>
        <ServiceInfo>
          <ServiceImage />
          <InfoCont>
            <Info>{info.title}</Info>
            <SubInfo>{info.p}</SubInfo>
            <ButtonCont>
              <Button block outlined>Conocénos</Button>
            </ButtonCont>
          </InfoCont>
        </ServiceInfo>
        </InnerContainer>
        <SubTitleCont>
          <SubTitle>
            Ofrecemos un <Strong>servicio profesional</Strong> a las necesidades de cada cliente
          </SubTitle>
        </SubTitleCont>
        <TextCardCarousel items={services} />
      </Container>
    </MainSection>
  )
}