import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from '../buttons';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  border: 1px solid #EBEBEB;
  height: 550px;
`
const CardImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 75%;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CardTitleCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
`
const CardTitle = styled.li`
  font-size: 1.2rem;
  margin-bottom: .5rem;
`
const CardPrice = styled.li`
  color: ${props => props.theme.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
`
const CardOperation = styled.span`
  font-weight: bold;
`
const CardCharacteristics = styled.ul`
  list-style: none;
  padding: 1rem;
  color: #919191;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
`

export default ({
  mainImage,
  title,
  value,
  code,
  ubication,
  characteristics,
})=> {
  return(
    <CardCont>
      <CardImage src={mainImage} />
      <CardInfo>
        <CardTitleCont>
          <CardTitle>{title}</CardTitle>
          <CardPrice>UF {value}</CardPrice>
          <li>
            <CardOperation>Venta - </CardOperation>
            <span>cod {code}</span>
          </li>
        </CardTitleCont>
        <CardCharacteristics>
          <CharItem>{ubication.address}</CharItem>
          {
            characteristics.slice(0, 2).map((char, index) => (
              <CharItem key={index}>
                <span>{char.name} {char.value} {char.name === "Sup. Total" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
        <Link to="/property" style={{ textDecoration: "none" }}>
          <Button primary outlined block>
            Ver
          </Button>        
        </Link>
      </CardInfo>
    </CardCont>
  )
}