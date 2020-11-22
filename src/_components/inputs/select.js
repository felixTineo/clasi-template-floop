import React, { useState } from 'react';
import styled from 'styled-components';
import { capitalize } from '../../_util';
import { v1 as uuid } from 'uuid';

const Label = styled.label`
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.primary ? props.theme.main.primaryColor : props.theme.main.secondaryColor};
  color: ${props => props.primary ? props.theme.main.primaryColor : props.theme.main.secondaryColor};
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
  color: ${props => props.primary ? props.theme.main.primaryColor : props.theme.main.secondaryColor};
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
const DefaultOption = styled.option`
  color: #212121;
  font-family: "Open Sans";
`
const AllOption = styled(DefaultOption)`
  font-weight: bold;
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
        defaultChecked={props.default}
        {...props}
      >
        <DefaultOption value="" disabled selected hidden>{props.default}</DefaultOption>
        <AllOption value="">Todo</AllOption>
        {
          props.options.map((o, index) => <Option value={o} key={uuid()}>{props.capitalize ? capitalize(o): o}</Option>)
        }       
      </Select>
    </Label>
  )
}