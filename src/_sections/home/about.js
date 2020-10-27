import React, { useContext } from 'react';
import styled from 'styled-components';
import OfficeContext from '../../_context/office-context';
import { TextCardCarousel } from '../../_components/card'
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';

const MainSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
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
const BannerCont = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${props => props.theme.home.about.banner.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BannerTitle = styled.h2`
  font-size: 50px;
  font-weight: 300;
  width: 50%;
  text-align: center;
  margin: .5rem;
`
const BannerSubTitle = styled.p`
  width: 50%;
  text-align: center;
  margin-bottom: 4rem;
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
  const services = useContext(OfficeContext).home.services;
  const info = useContext(OfficeContext).home.about.banner;
  return(
    <MainSection>
      <Container>
        <BannerCont>
          <BannerTitle>
            {info.title}
          </BannerTitle>
          <BannerSubTitle>
            {info.subTitle}
          </BannerSubTitle>
          <Button outlined style={{ width: "20%", marginBottom: 16 }}>
            {info.buttonText}
          </Button>
        </BannerCont>
        <SubTitleCont>
          <SubTitle>
            Ofrecemos un <Strong>servicio profesional</Strong> a las necesidades de cada cliente
          </SubTitle>
        </SubTitleCont>
        <TextCardCarousel items={services.items} />
      </Container>
    </MainSection>
  )
}