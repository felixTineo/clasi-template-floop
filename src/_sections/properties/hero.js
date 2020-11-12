import React, { useState, useReducer, useCallback, useContext } from 'react';
import OfficeContext from '../../_context/office-context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useWindowSize } from '../../_hooks';
import PROPERTY_TYPES from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { makeUrlPropertiesFilter as makeUrl } from '../../_utils';

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


export default ({ search, setSearch, setPaginateProperties })=> {
  const size = useWindowSize();
  const state = useContext(OfficeContext);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [filters, setFilters] = useReducer((current, next) => ({ ...current, ...next }),{
    priceMin: "",
    priceMax: "",
    bedrooms: "",
    bathrooms: "",
    currency: ""
  });

  const handleSearch = useCallback(e => {
    setSearch({ [e.target.id]: e.target.value });    
  },[]);

  const onSubmit = useCallback(async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const url = makeUrl({ id: state.office, status: "PUBLICADA", ...search, limit: 6 });
      console.log(url);
      const data = await fetch(url);
      const result = await data.json();
      setLoading(false);
      console.log("RESULT",result);
      setPaginateProperties(result);
    }
    catch(e){
      console.log(e);
      setLoading(false);
    }
  });

  const handleFilter = useCallback(e => {
    setFilters({ [e.target.id]: e.target.value });
  },[]);

  const onSubmitFilter = useCallback(async(e) => {
    e.preventDefault();
    try{
      setLoadingFilter(true);
      const url = makeUrl({ id: state.office, status: "PUBLICADA", ...filters, ...search, limit: 6 });
      console.log(url);
      const data = await fetch(url);
      const result = await data.json();
      console.log("RESULT",result);
      setPaginateProperties(result);
      setLoadingFilter(false);
    }catch(e){
      setLoadingFilter(false);
      console.log(e);
    }
  })

  return(
    <SectionCont>
      <Container>
        {console.log(filters)}
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
                      <SearchOutlined style={{ marginLeft: 8 }} />
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
            <FilterForm onSubmit={onSubmitFilter}>
              <Container>
                <Row>
                  <Col xs={12} md={2}>
                    <Input
                      label="Desde"
                      id="priceMin"
                      value={filters.priceMin}
                      onChange={handleFilter}                      
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      label="Hasta"
                      id="priceMax"
                      value={filters.priceMax}
                      onChange={handleFilter}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Input
                      label="Dormitorios"
                      id="bedrooms"
                      value={filters.bedrooms}
                      onChange={handleFilter}
                      type="number"
                      min={0}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                  <Input
                      label="Baños"
                      id="bathrooms"
                      value={filters.bathrooms}
                      onChange={handleFilter}
                      type="number"
                      min={0}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Select
                      id="currency"
                      onChange={handleFilter}
                      default="Divisa"
                      options={["CLP", "UF"]}
                      values={["CLP", "UF"]}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Button outlined block disabled={loadingFilter}>
                      Buscar
                      {
                        !loadingFilter
                        ?(
                          <SearchOutlined style={{ marginLeft: 8 }} />
                        )
                        :(
                          <LoadingOutlined spin style={{ marginLeft: 8 }}/>
                        )
                      }
                    </Button>  
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