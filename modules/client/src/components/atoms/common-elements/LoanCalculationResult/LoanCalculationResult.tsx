/* ================================
              Packages
================================ */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
/* ================================
              Types
================================ */
interface ILoanInfo{
    information: string,
    value: string|number,

}
interface ILoanCalculationResultProps {
    apr: number,
    totalRepayedAmmount: number,
    monthlyPayment: number
}

interface ICardProps {
    height: number,
    children: any,
}
/* ================================
               Styles
================================ */
const Card = styled.div<ICardProps>`
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    background-color: #fff;   
    height: ${(props) => props.height}px;
    border-radius: 6px;
    padding: 25px;
`;

const CardTitle = styled.div`
    color: #5E5873;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
`;

const MonthlyPayment = styled.div`
    text-align: center;
    font-size: 63px;
    color: #5E5873;
`;

const LoanInfoRow = styled.div`
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
`;
const LoanInfo = styled.div``;
const ImportantLoanInfoSeparator = styled.div`
    display: block;
    height: 1px;
    background-color: #EBE9F1;
    width: 100%;
    margin: 15px 0;
`;
/* ================================
              Main
================================ */
export function LoanCalculationResult(props: ILoanCalculationResultProps) {
    const {
        apr,
        totalRepayedAmmount,
        monthlyPayment,
    } = props;

    return (
        <Card height={300}>
            <CardTitle>Měsíčně</CardTitle>
            <MonthlyPayment>{monthlyPayment}</MonthlyPayment>
            <LoanInfoRow>
                <LoanInfo>
                    Roční úroková sazba od
                </LoanInfo>
                <LoanInfo>
                    {apr} %
                </LoanInfo>
            </LoanInfoRow>
            <ImportantLoanInfoSeparator />
            <LoanInfoRow>
                <LoanInfo>
                    Za dobu trvání zaplatíte
                </LoanInfo>
                <LoanInfo>
                    {totalRepayedAmmount} Kč
                </LoanInfo>
            </LoanInfoRow>
        </Card>
    );
}
export default LoanCalculationResult;
