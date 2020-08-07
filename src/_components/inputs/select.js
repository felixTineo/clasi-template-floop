import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
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
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  background-color: transparent;
  background-image: url('/chevron.svg');
  background-repeat: no-repeat;
  background-position: right center;
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
    <Label htmlFor={props.id}>
      <Select
        defaultChecked="propiedad"
        {...props}
      >
        <DefaultOprion value="">{props.default}</DefaultOprion>
        {
          props.options.map((o, index) => <Option key={index}>{o}</Option>)
        }       
      </Select>
    </Label>
  )
}