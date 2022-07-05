/* ================================
              Packages
================================ */
import React from 'react'
import {
    RecoilRoot
} from 'recoil';
import {render, screen} from '@testing-library/react'
/* ================================
            Store
================================ */
/* ================================
            Components
================================ */
import { LoanCalculator } from './LoanCalculator';
/* ================================
            Utils
================================ */
/* ================================
              Main
================================ */
describe("Loan calculator", () => {
    it('has repay-length-input', async () => {
        render(
            <RecoilRoot>
                <LoanCalculator />
            </RecoilRoot>
        )
        const repayLengthInput = screen.getByLabelText('repay-length-input')
        expect(repayLengthInput).toBeInTheDocument()
        
    })
    it('has loan-ammount-input', async () => {
        render(
            <RecoilRoot>
                <LoanCalculator />
            </RecoilRoot>
        )
        const loanAmmountInputinput = screen.getByLabelText('loan-ammount-input')
        expect(loanAmmountInputinput).toBeInTheDocument()
    })
})