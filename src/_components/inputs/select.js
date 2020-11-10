import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.primary ? props.theme.primaryColor : "#fff"};
  color: ${props => props.primary ? props.theme.primaryColor : "#fff"};
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1rem;
  margin-bottom: 1rem;
`

const Select = styled.select`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: "Open Sans";
  padding: 0 0 .3rem .3rem;
  color: ${props => props.primary ? props.theme.primaryColor : "#fff"};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  background-color: transparent;
  background-image: ${props => props.primary
  ? `url('data:image/svg+xml;utf8,<svg stroke="%23${props.theme.primaryColor.substring(1)}" width="28" height="6.633" fill="none" version="1.1" viewBox="0 0 1 6.633" xmlns="http://www.w3.org/2000/svg"><path d="m11.368 0.63261-5.3678 5.3678-5.3678-5.3678"/></svg>')`
  : `url('data:image/svg+xml;utf8,<svg stroke="%23FFFFFF" width="28" height="6.633" fill="none" version="1.1" viewBox="0 0 28 6.633" xmlns="http://www.w3.org/2000/svg"><path d="m11.368 0.63261-5.3678 5.3678-5.3678-5.3678"/></svg>')`};
  background-repeat: no-repeat;
  background-position: right center;
  font-weight: bold;
  cursor: pointer;
  &::-ms-expand{
    background: transparent;
  };
`
const DefaultOprion = styled.option`
  color: #212121;
  font-family: "Open Sans";
`
const Option = styled.option`
  color: #212121;
  font-size: 1rem;
  font-family: "Open Sans";
`

export default (props)=> {

  return(
    <Label primary={props.primary} htmlFor={props.id}>
      <Select
        defaultChecked="propiedad"
        {...props}
      >
        <DefaultOprion value="">{props.default}</DefaultOprion>
        {
          props.options.map((o, index) => <Option value={props.values[index]} key={index}>{o}</Option>)
        }       
      </Select>
    </Label>
  )
}