/* ================================
              Packages
================================ */
import React, {
    ChangeEvent, useEffect, useState, useCallback,
} from 'react';
import styled, { css } from 'styled-components';
/* ================================
             Types
================================ */
interface IRangeProps {
    value: number,
    onChange: any,
    rangeMin: number,
    rangeMax: number,
    step: number
}
interface IRangeDescriptionProps {
    maximum?: any
}
/* ================================
               Styles
================================ */
const RangeSpacer = styled.div`
    padding: 10px 0;
`;

const RangeWrapper = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    
`;

const RangeInput = styled.input`
    -webkit-appearance:none !important;
    width: 100%;
    height: 2px;
    background: #7367F0;
    border: none;
    outline: none;
    height: 6px;
    border-radius: 6px;
    transition: 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid #7367F0;
        border-radius: 18px;
        background-color: #fff;
    }

    &::-moz-range-thumb{
        appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid #7367F0;
        border-radius: 18px;
        background-color: #fff;
    }
    &:hover{
        box-shadow: 0 2px 4px rgba(115, 103, 240, 0.4);
    }
`;
const RangeDescription = styled.span`
    position: absolute;
    top: 25px;
    ${(props: IRangeDescriptionProps) => props.maximum && css`
        right: 0;
    `}

`;
/* ================================
            Components
================================ */
/* ================================
              Main
================================ */
export function Range(props: IRangeProps) {
    const {
        value, onChange, rangeMin, rangeMax, step,
    } = props;
    return (
        <RangeSpacer>
            <RangeWrapper>
                <RangeInput
                    type="range"
                    min={rangeMin}
                    max={rangeMax}
                    value={value}
                    onChange={onChange}
                    step={step}
                />
                <RangeDescription>{rangeMin}</RangeDescription>
                <RangeDescription maximum>{rangeMax}</RangeDescription>
            </RangeWrapper>
        </RangeSpacer>
    );
}
export default Range;
