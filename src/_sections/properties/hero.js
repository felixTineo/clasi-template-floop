import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useWindowSize } from '../../_hooks';
const SectionCont = styled.div`
  background-color: #fff;
  overflow: hidden;
  padding: 8rem 0 0;
`

const SearchForm = styled.form`
  width: 100%;
  margin-bottom: 2rem;
  @media(min-width: 768px){
   margin: 4rem 0 6rem;
  } 
`
const FilterForm = styled.form`
  width: 100%;
  background-color: ${props => props.theme.main.primaryColor};
  padding: 1.5rem 0;
  @media(min-width: 768px){
   padding: 3rem 0;
  } 
`
const ButtonIcon = styled.img`
  width: 1rem;
  margin-left: .5rem;
  transform: ${props => props.rotate && 'rotate(180deg)'};
`


export default ()=> {
  const size = useWindowSize();
  const [filter, setFilter] = useState(false);
  return(
    <SectionCont>
      <Container>
        <h1>Propiedades</h1>
      </Container>
      <SearchForm>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Input primary label="Operación" id="property" />
            </Col>
            <Col xs={12} md={3}>
              <Select primary default="Propiedad" options={["option A", "option B", "option C"]} />
            </Col>
            <Col xs={12} md={3}>
              <Select primary default="Comuna" options={["option A", "option B", "option C"]} />
            </Col>
            <Col xs={12} md={3}>
              <div style={{ marginTop: size.width > 768 ? 0 : '2rem' }}>
                <Button primary block>
                  Buscar
                  <img src="/search.svg" style={{ marginLeft: 8 }} />
                </Button>                
              </div>
            </Col>                                          
          </Row>
          </Container>
        </SearchForm>
        {
          filter && (
            <FilterForm>
              <Container>
                <Row>
                  <Col xs={12} md={2}>
                    <Input label="Desde" />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input label="/ Hasta" />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select default="Dormitorios" options={["option A", "option B", "option C"]} />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select default="Baños" options={["option A", "option B", "option C"]} />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select default="Divisa" options={["option A", "option B", "option C"]} />
                  </Col>
                  <Col xs={12} md={2}>
                    <Button outlined block>Buscar</Button>
                  </Col>                                                                                    
                </Row>
              </Container>
            </FilterForm>            
          )
        }
        {
          !filter
           ? <Button onClick={()=> setFilter(true)} block primary noRound>Más filtros <ButtonIcon src={'/chevron.svg'} /></Button>
           : <Button onClick={()=> setFilter(false)} block primary noRound>Menos filtros <ButtonIcon rotate={filter} src={'/chevron.svg'} /></Button>
        }
    </SectionCont>
  )
}