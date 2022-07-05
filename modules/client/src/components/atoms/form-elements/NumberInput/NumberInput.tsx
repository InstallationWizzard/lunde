/* ================================
              Packages
================================ */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
/* ================================
             Types
================================ */
interface INumberInputProps {
    value: number,
    onChange: any,
    onBlur?: any,
    ariaLabel: string,
    rangeMin: number,
    rangeMax: number,
    step: number
}
/* ================================
               Styles
================================ */
const Input = styled.input`
    width: 100%;
    height: 46px;
    color: #B9B9C3;
    border-radius: 5px;
    border: 1px solid #B9B9C3;
    background-color: inherit;
    transition: 0.2s;
    outline: none;
    font-size: 1em;
    display: block;
    padding: 0 10px;
    &:hover{
        border-color: #7367F0;
    }
    &:focus{
        border: 1px solid #7367F0;
    }
`;
/* ================================
              Main
================================ */
export function NumberInput(props: INumberInputProps) {
    const {
        value, onChange, onBlur, ariaLabel, rangeMin, rangeMax, step,
    } = props;

    return (
        <Input
            type="number"
            min={rangeMin}
            max={rangeMax}
            value={value}
            onChange={onChange}
            step={step}
            onBlur={onBlur}
            aria-label={ariaLabel}
        />
    );
}
export default NumberInput;
