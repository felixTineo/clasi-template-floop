import { useReducer, useEffect, useMemo, useCallback } from 'react';
import { useQueryParam } from 'gatsby-query-params';
import noData from '../_context/state';
import Data from '../_context/data.class';

export default ()=> {
  const builderId = useQueryParam('builderId');
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }),{
    data: null,
    error: false,
    loading: true,
  });

  const baseUrl = useMemo(()=> {
    return `https://api.clasihome.com/rest/builders?builderId=${builderId}`;
  },[builderId]);

  const getData = useCallback(async()=>{
    try{
      const data = await fetch(baseUrl);
      const result = await data.json();
      console.log("INITIAL DATA", result);
      const propertiesData = await fetch(`https://api.clasihome.com/rest/properties?id=${result.user ? result.user : result.office }&typeId=${result.user ? "user" : "office"}&status=PUBLICADA&limit=8`);
      const propertiesResult = await propertiesData.json();
      result.home.properties.items = propertiesResult.properties;
      console.log("FINAL DATA", result);
      setQuery({ loading: false, data: new Data(result) });
    }
    catch(e){
      console.log(e);
      //setQuery({ loading: false, error: true });
      const propertiesData = await fetch(`https://api.clasihome.com/rest/properties?id=5e8e36b31c9d440000d35090&typeId=office&status=PUBLICADA&limit=8`);
      const propertiesResult = await propertiesData.json();
      noData.home.properties.items = propertiesResult.properties;
      setQuery({ loading: false, error: false, data: noData });
    }
  },[builderId]);

  useEffect(()=>{    
      /*if(builderId){
        getData();
      }
      else{
        setQuery({ loading: false, error: false, data: noData });
      }*/
      getData();
  },[builderId]);

  return query;
}