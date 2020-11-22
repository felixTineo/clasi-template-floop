import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useWindowSize } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { useNavigateForm } from '../../_hooks';
import { getSearchParams } from 'gatsby-query-params';


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
  const params = getSearchParams();
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });
  useEffect(()=>{
    setInitial(params);
  },[params])
  return(
    <SectionCont>
      <Container>
        <h1>Propiedades</h1>
      </Container>
      <SearchForm onSubmit={e => {e.preventDefault(); onFinish()}} className="animate__animated animate__fadeInUp">
          <Container>
            <Row align="center">
              <Col xs={12} md={3}>
                <Select
                  id="operation"
                  onChange={onChange}
                  value={values.operation}
                  default="Operación"
                  options={["VENTA", "ARRIENDO"]}
                  capitalize
                  primary
                />
              </Col>
              <Col xs={12} md={3}>
                <Select
                  id="propertyType"
                  onChange={onChange}
                  value={values.propertyType}
                  default="Propiedad"
                  options={PROPERTY_TYPE}
                  capitalize
                  primary
                />
              </Col>
              <Col xs={12} md={3}>
                <Select
                  id="commune"
                  onChange={onChange}
                  value={values.commune}
                  default="Comuna"
                  options={COMMUNES.map(val => val.name)}
                  primary
                />
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
            <FilterForm onSubmit={e => {e.preventDefault(); onFinish()}}>
              <Container>
                <Row>
                  <Col xs={12} md={2}>
                    <Input
                      id="priceMin"
                      onChange={onChange}
                      value={values.priceMin}                      
                      min={0}      
                      type="number"                                    
                      label="Desde"
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      id="priceMax"
                      onChange={onChange}
                      value={values.priceMax}                      
                      min={0}      
                      type="number"                    
                      label="Hasta"
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      id="bedrooms"
                      onChange={onChange}
                      value={values.bedrooms}
                      min={0}      
                      type="number"                    
                      label="Dormitorios"
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      id="bathrooms"
                      onChange={onChange}
                      value={values.bathrooms}
                      min={0}      
                      type="number"                    
                      label="Baños"
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select
                      id="currency"
                      onChange={onChange}
                      value={values.currency}
                      default="Divisa"
                      options={["CLP", "UF"]}
                    />
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