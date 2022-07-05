/* ================================
              Packages
================================ */
import React from 'react';
import {
    RecoilRoot
} from 'recoil';

/* ================================
            Components
================================ */
import { LoanCalculator } from './components/sections/LoanCalculator';
/* ================================
              Main
================================ */
export function App() {
    return (
        <RecoilRoot>
            <LoanCalculator />
        </RecoilRoot>
    );
}
export default App;
