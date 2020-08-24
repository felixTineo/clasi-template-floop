import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`

`
const SubTitle = styled.p`

`
const Form = styled.form`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ImgCaptcha = styled.img`

`
const MailSpan = styled.span`
  color: ${props => props.theme.main.primaryColor};
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 4rem;
`
const ButtonContainer = styled.div`
   margin-top: 48px;
   display:flex;
   justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`

export default ()=> {

  return(
    <Container>
      <MainCont>
        <Title>
          ¿Dudas? ¿Consultas? Estamos aquí para ayudarlo
        </Title>
        <SubTitle>
          Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad
        </SubTitle>
        <Form onSubmit={e=> e.preventDefault()}>
          <Row align="center">
            <Col xs={12} md={6}>
              <Input
                label="Nombre"
                id="name"
                primary
              />
            </Col>
            <Col xs={12} md={6}>
              <Input
                label="Email"
                id="email"
                primary
              />
            </Col>
            <Col xs={12} md={6}>
              <Input
                label="Teléfono"
                id="phone"
                primary
              />
            </Col>
            <Col xs={12} md={6}>
              <Input
                label="Mensaje"
                id="message"
                primary
              />
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 48 }}>
              <ImgCaptcha src="/captcha.png" alt="no soy un robot" />
            </Col>
            <Col xs={12} md={6}>
              <ButtonContainer>
                <Button primary>Enviar</Button>
              </ButtonContainer>
            </Col>                                                
          </Row>
        </Form>
        <SubTitleFooter>
          También puede escribirnos a <MailSpan>ventas@leasy.cl</MailSpan>
        </SubTitleFooter>
      </MainCont>
    </Container>
  )
}