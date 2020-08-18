import React, { useContext } from 'react';
import OfficeContext from '../../_context/office-context';
import styled from 'styled-components';

const HeroCont = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${props => props.theme.about.hero.background });
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media(min-width: 768px){
    height: 50vh;
  }
`
const HeroTitle = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 36px;
  width: 100%;
  text-align: center;
  @media(min-width: 768px){
    font-size: 50px;
    width: 50%;
  }  
`

export default ()=>{
  const state = useContext(OfficeContext);
  return(
    <HeroCont>
      <HeroTitle>
        {state.about.hero.title}
      </HeroTitle>
    </HeroCont>
  )
}