import React, { useContext } from 'react';
import Context from '../../../_context/office-context';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Input } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';

const MainCont = styled.div`
  padding: 4rem;
  background-color: #fff;
`
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 76px;
    width: 76px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
`
const UserInfoItem = styled.li`
  font-weight: bold;
`
const ContactForm = styled.form`
  margin-top: 3rem;
`
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`

export default ({ description })=> {
  const foo = useContext(Context).singleProperty;
  const user = { ...description._comercialUser[0], ...description._comercialUser_person[0] };

  return(
    <MainCont>
      {console.log("DESCRIPTION",description)}
      <h2>Contacto</h2>
      <UserCont>
        <Avatar src={user.avatar} alt={user.lastName} />
        <UserInfoCont>
          <UserInfoItem>
            {`${user.firstName} ${user.lastName} - ${user.position}`}
          </UserInfoItem>
          <UserInfoItem>
            {`${user.phone.countryCode} ${user.phone.areaCode} ${user.phone.phoneNumber}`}
          </UserInfoItem>
          <UserInfoItem>
            {user.email}
          </UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm
        onSubmit={(e)=> e.preventDefault() }
      >
        <Row>
          <Col xs={12}>
            <Input
              label="Nombre"
              gray
              id="name"
            />
          </Col>
          <Col xs={12}>
            <Input
              label="Teléfono"
              gray
              id="phone"
            />
          </Col>
          <Col xs={12}>
            <Input
              label="Email"
              gray
              id="email"
            />
          </Col>
          <Col xs={12}>
            <Input
              label="Mensaje"
              gray
              id="message"
            />
          </Col>   
          <Col xs={12}>
            <ContactFormButtons>
              <Button primary outlined block>
                Enviar
              </Button>
            </ContactFormButtons>
          </Col>          
          <Col xs={12}>
            <ContactFormButtons>
              <Button primary outlined block>
                teléfono
              </Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12}>
            <ContactFormButtons>
              <Button primary outlined block>
                whatsapp
              </Button>
            </ContactFormButtons>
          </Col>          
        </Row>
      </ContactForm>
    </MainCont>
  )
}