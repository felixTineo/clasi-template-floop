import React, { useContext } from 'react';
import OfficeContext from '../../_context/office-context';
import { QuoteCardCarousel } from '../../_components/card'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import noData from '../../_context/state'

const MainSection = styled.section`
  min-height: 50vh;
  padding: 6rem 0; 
`

export default ()=> {
  const reviews = useContext(OfficeContext).home.reviews;
  return(
    <Container>
      <MainSection>
        <QuoteCardCarousel items={reviews.items[0].review ? reviews.items : noData.home.reviews.items} />
      </MainSection>
    </Container>
  )
}

