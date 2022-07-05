/* ================================
              Packages
================================ */
import React from 'react';
import styled from 'styled-components';
/* ================================
            Components
================================ */

/* ================================
               Styles
================================ */
const SwitchLabel = styled.span`
    padding-left: 5px;
`
/* ================================
                Types
================================ */
interface ISwtichProps {
    checked: boolean,
    onChange: any
}
/* ================================
              Main
================================ */
export function Switch(props: ISwtichProps) {
    const { onChange, checked } = props
    return (
        <label>
            <input 
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />
            <SwitchLabel>Pojištění proti nechopnosti splácet</SwitchLabel>
        </label>

    );
}
export default Switch;
