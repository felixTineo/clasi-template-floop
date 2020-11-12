import React, { useContext } from 'react';
import { hexTorgba } from '../../_utils';
import Context from '../../_context/office-context';
import { DescriptionCarousel } from '../../_components/card';
import styled from 'styled-components';
import noData from '../../_context/state';

const MainCont = styled.section`
  position: relative;
  min-height: 40vh;
  background-image: ${props => `linear-gradient(${hexTorgba(props.theme.primaryColor, .60)},${hexTorgba(props.theme.primaryColor, .60)}),
                                linear-gradient(${hexTorgba(props.theme.primaryColor, .60)}, ${hexTorgba(props.theme.primaryColor, .60)}),
                                url(${props.theme.about.description.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  @media(min-width: 768px){
    padding: 4rem;
    min-height: 50vh;
  }
`

export default ()=> {
  const state = useContext(Context);
  return(
    <MainCont>
      <DescriptionCarousel items={state.about.description.items[0].title ? state.about.description.items : noData.about.description.items} />
    </MainCont>
  )
}