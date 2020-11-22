import { useEffect, useContext, useState, useCallback, useReducer } from 'react';
import context from '../_context/office-context';
import { getSearchParams } from 'gatsby-query-params';
import { urlBuilder } from '../_util';

export default ()=> {
  const office = useContext(context).office;
  const params = getSearchParams();
  const [query, setQuery] = useReducer((current, next) => ({...current, ...next}),{
    loading: true,
    error: false,
    data: null,
  })

  const getProperties = useCallback(async() => {
    try{
      const { id, typeId } = office;
      const url = urlBuilder('https://api.clasihome.com/rest/properties',{...params, id, typeId} );
      console.log("PROPERTIES URL", url)
      const data = await fetch(url);
      const result = await data.json();
      setQuery({ loading: false, data: result });
    }
    catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[office, params])

  useEffect(()=>{
    getProperties();
  },[office, params]);

  return query;
}