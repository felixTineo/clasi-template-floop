import React, { useState, useReducer, useCallback, useContext } from 'react';
import OfficeContext from '../../_context/office-context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useWindowSize } from '../../_hooks';
import PROPERTY_TYPES from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { LoadingOutlined } from '@ant-design/icons';

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
  background-color: ${props => props.theme.primaryColor};
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


export default ({ search, setSearch, setProperties })=> {
  const size = useWindowSize();
  const state = useContext(OfficeContext);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(e => {
    setSearch({ [e.target.id]: e.target.value });    
  },[]);

  const onSubmit = useCallback(async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const { operation, propertyType, commune } = search;
      const data = await fetch(`https://api.clasihome.com/rest/properties?typeId=office&id=${state.office}&operation=${operation}&propertyType=${propertyType}&commune=${commune}&status=PUBLICADA`);
      const result = await data.json();
      setLoading(false);
      console.log("RESULT",result);
      setProperties(result.properties);
    }
    catch(e){
      console.log(e);
      setLoading(false);
    }
  });

  return(
    <SectionCont>
      <Container>
        <h1>Propiedades</h1>
      </Container>
      <SearchForm
        onSubmit={onSubmit}
      >
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Select
                id="operation"
                value={search.operation}
                onChange={handleSearch}
                default="Operación"
                options={["venta", "arriendo"]}
                values={["VENTA", "ARRIENDO"]}
                primary
              />
            </Col>
            <Col xs={12} md={3}>
              <Select
                default="Propiedad"
                id="propertyType"
                value={search.propertyType}
                onChange={handleSearch}
                options={PROPERTY_TYPES.map(type => type.toLocaleLowerCase())}
                values={PROPERTY_TYPES}
                primary
              />
            </Col>
            <Col xs={12} md={3}>
              <Select
                default="Comuna"
                id="commune"
                value={search.commune}
                onChange={handleSearch}
                options={COMMUNES.map(commune => commune.name)}
                values={COMMUNES.map(commune => commune.name)}
                primary
              />
            </Col>
            <Col xs={12} md={3}>
              <div style={{ marginTop: size.width > 768 ? 0 : '2rem' }}>
                <Button primary block disabled={loading}>
                  Buscar
                  {
                    !loading
                    ?(
                      <img src="/search.svg" style={{ marginLeft: 8 }} />
                    )
                    :(
                      <LoadingOutlined spin style={{ marginLeft: 8 }}/>
                    )
                  }
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
                    <Select
                      default="Dormitorios"
                      options={["option A", "option B", "option C"]}
                      values={["option A", "option B", "option C"]}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select
                      default="Baños"
                      options={["option A", "option B", "option C"]}
                      values={["option A", "option B", "option C"]}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select
                      default="Divisa"
                      options={["option A", "option B", "option C"]}
                      values={["option A", "option B", "option C"]}
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