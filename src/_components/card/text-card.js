import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  height: 257px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardTitle = styled.p`
  margin: 0;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 257px;
  text-align: center;
`
const CardInfo = styled.p`
  margin: 0;
  text-align: center;
  width: 257px;
`
export default ({ title, p })=> {

  return(
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardInfo>{p}</CardInfo>
    </Card>
  )
}