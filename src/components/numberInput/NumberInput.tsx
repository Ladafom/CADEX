import type { FC } from 'react';
import { NumberField, Label, Input } from 'react-aria-components';
import './NumberInput.css'

interface NumberInputProps {
  label?: string
  name:string
  defaultValue?:number
  minValue?:number
  maxValue?: number
}

export const NumberInput:FC<NumberInputProps> = (props) => {

  const {
    label,
    name,
    defaultValue = 50,
    minValue = 10,
    maxValue = 500
  } = props

  return (
    <NumberField
      defaultValue={defaultValue}
      minValue={minValue} 
      maxValue={maxValue} 
      name={name}
      className='custom-number-field'
    >
      <Label>{label}</Label>
      <Input className='custom-input'/>
    </NumberField>
  )
}