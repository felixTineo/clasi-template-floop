import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  padding: 0 4rem;
  background-color: #fff;
  //min-height: 570px;
`
const OperationCode = styled.p`
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
`
const Price = styled(Title)`
  color: ${props => props.theme.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    margin: 0;
    align-items: center;
  }
`
const Marker = styled(EnvironmentOutlined)`
  color: ${props => props.theme.primaryColor};
  margin-right: .5rem;
`


export default ({ description })=> {

  return(
    <MainCont>
      <Row>
        <Col xs ={12}>
          <OperationCode>
            {`${description.operation}-COD.: ${description.code}`}
          </OperationCode>
          <Title>
            {description.title}
          </Title>
          <Price>
            {`${description.currency} ${description.value}`}
          </Price>
          <UbicationCont>
            <Marker />
            <span>
              {description.ubication.address}
            </span>
          </UbicationCont>
        </Col>
        <Visible xs>
          <InteractionButtons />
        </Visible>
      </Row>
    </MainCont>
  )
}