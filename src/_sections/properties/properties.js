import React, { useContext, useEffect, Fragment, useState, useReducer, useCallback } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { ImageCard as Card } from '../../_components/card';
import OfficeContext from '../../_context/office-context';
import noData from '../../_context/state';
import Hero from './hero';
import ReactPaginate from 'react-paginate';
import './react-paginate.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { makeUrlPropertiesFilter as makeUrl } from '../../_utils';
import { LoadingOutlined, FrownOutlined } from '@ant-design/icons';

const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`
const NavArrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 250ms ease;
`
const NavNumber = styled(NavArrow)`
  color: #919191;
  margin: 0 1rem;
  &:hover{
    color: ${props => props.theme.primaryColor};
  }
`
const StyledRightOutlined = styled(RightOutlined)`
  color: ${props => props.theme.primaryColor};
`
const StyledLeftOutlined = styled(LeftOutlined)`
  color: ${props => props.theme.primaryColor};
`

const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryColor};
  font-size: 3rem;
  min-height: calc(100vh - 108px);
`
const NoDataCont = styled.div`
  height: calc(50vh - 108px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default ({ location })=> {
  const [paginateProperties, setPaginateProperties] = useState({properties: []});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useReducer((current, next) => ({ ...current, ...next }),{
    operation: '',
    propertyType: '',
    commune: '',
  });

  const state = useContext(OfficeContext).home.properties.paginateProperties;
  const office = useContext(OfficeContext).office;

  useEffect(()=> {
    if( location.state && location.state.properties){
      setPaginateProperties(location.state);
      setSearch(location.state.search);
    }else {
      //state.totalRegistersQuery = 0;
      //state.properties = [];
      setPaginateProperties(state);
    }
  },[state]);

  const handlePaginate = useCallback(async(value) =>{
    try{
      setLoading(true);
      const url = makeUrl({ page: value.selected, status: "PUBLICADA", id:office, limit: 6 });
      const data = await fetch(url);
      const result = await data.json();
      setPaginateProperties(result);
      setLoading(false);
    }catch(e){
      console.log(e);
      setLoading(false);
    }
  },[paginateProperties]);

  return(
    <Fragment>
      <Hero
        search={search}
        setSearch={setSearch}
        setPaginateProperties={setPaginateProperties}
      />
    <Container>
      <div style={{ paddingTop: '5rem' }}>
        <Row>
          {
            loading
            ?(
              <Col xs={12}>
                <LoadingCont>
                  <LoadingOutlined />
                </LoadingCont>                  
              </Col>
            )
            :paginateProperties.properties.map(p => (
              <Col key={p.mainImage} xs={12} md={4} style={{ margin: "1rem 0" }}>
                <Card {...p} />
              </Col>
            ))
          }
          <Col xs={12}>
            {
              paginateProperties.totalRegistersQuery > 0 && (
              <NavPaginate>
                <ReactPaginate
                  pageCount={paginateProperties.totalRegistersQuery / 6}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={4}
                  containerClassName="paginateCont"
                  activeClassName="pagination-page-active"
                  pageClassName="pagination-page"
                  previousLabel={<StyledLeftOutlined />}
                  previousClassName="back-button-paginate"
                  nextLabel={<StyledRightOutlined />}
                  nextClassName="next-button-paginate"
                  onPageChange={handlePaginate}
                />
              </NavPaginate>                
              )
            }
          </Col>
          {
            paginateProperties.totalRegistersQuery === 0 && (
              <Col xs={12}>
                <NoDataCont>
                  <FrownOutlined style={{ fontSize: 36, color: "#979797" }} />
                  <p>No se encontron propiedades</p>
                </NoDataCont>
              </Col>                
            )
          }
        </Row>
      </div>
    </Container>
    </Fragment>
  )
}