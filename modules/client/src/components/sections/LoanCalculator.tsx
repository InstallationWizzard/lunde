/* ================================
              Packages
================================ */
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
    useRecoilState,
    useRecoilValue
} from 'recoil';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useIdleTimer } from 'react-idle-timer';
/* ================================
            Store
================================ */
//TODO: Aliases for imports
import { 
    insuranceState,
    loanAmmountState,
    aprState,
    repayLengthState,
    insuranceRateState,
    minimumLoanAmmountState,
    maximumLoanAmmountState,
    minimumRepayLengthState,
    maximumRepayLengthState
} from '../../../src/store/LoanCalculator/LoanCalculator.atoms'
/* ================================
            Components
================================ */
import { NumberInput } from '../atoms/form-elements/NumberInput/NumberInput';
import { Range } from '../atoms/form-elements/Range/Range';
import { LoanCalculationResult } from '../atoms/common-elements/LoanCalculationResult/LoanCalculationResult';
import { Header2 } from '../atoms/typography/Typography';
import { Switch } from '../atoms/form-elements/Switch/Switch';
/* ================================
              Main
================================ */
export function LoanCalculator() {
    // States
    const [loanAmmount, setLoanAmmount] = useRecoilState(loanAmmountState);
    const [apr, setApr] = useRecoilState(aprState);
    const [repayLength, setRepayLength] = useRecoilState(repayLengthState);
    const [insuranceRate, setInsuranceRate] = useRecoilState(insuranceRateState);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalRepayedAmmount, setTotalRepayedAmmount] = useState(0);
    const [insurance, setInsurance] = useRecoilState(insuranceState);
    // Statics
    const minimumLoanAmmount = useRecoilValue(minimumLoanAmmountState);
    const maximumLoanAmmount = useRecoilValue(maximumLoanAmmountState);
    const minimumRepayLength = useRecoilValue(minimumRepayLengthState);
    const maximumRepayLength = useRecoilValue(maximumRepayLengthState);
    // Utils
    const recalculateLoan = () => {
        const params = {
            loanAmount: loanAmmount,
            apr: apr,
            repayLength: repayLength,

        };
        // TODO: Should be process.env variable
        axios.get('http://host.docker.internal:50001/calculate-interest', { params }).then((response: any) => {
            const { data } = response;
            setMonthlyPayment(Math.round(data.monthlyPayment));
            setTotalRepayedAmmount(Math.round(data.totalRepayedAmmount));
        });
    };

    // TODO: Put this to separately
    const validateLoanAmmountInputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(event.target.value);
        if (Number(event.target.value) > maximumLoanAmmount) {
            newValue = maximumLoanAmmount;
        }
        if (Number(event.target.value) < minimumLoanAmmount) {
            newValue = minimumLoanAmmount;
        }
        setLoanAmmount(newValue);
    }

    const validateRepayLengthInputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(event.target.value);
        if (Number(event.target.value) > maximumRepayLength) {
            newValue = maximumRepayLength;
        }
        if (Number(event.target.value) < minimumRepayLength) {
            newValue = minimumRepayLength;
        }
        setRepayLength(newValue);
    }

    const loanAmmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoanAmmount(Number(event.target.value));
        idleTimer.activate();
    };

    const repayLengthChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setRepayLength(Number(event.target.value));
        idleTimer.activate();
    };

    const insuranceChange = (event: { target: { checked: React.SetStateAction<boolean>; }; }) => {
        setInsurance(event.target.checked);
        if(event.target.checked){
            setInsuranceRate(insuranceRate + 400)
        } else {
            setInsuranceRate(insuranceRate - 400)
        }
    }

    const onIdle = () => {
        // TODO: Standardize validation and don't have the same function in 17 billion places
        if(
            maximumRepayLength >= repayLength && 
            repayLength >= minimumRepayLength && 
            maximumLoanAmmount >= loanAmmount &&
            loanAmmount >= minimumLoanAmmount
        ){
            recalculateLoan();
        }
    };

    const idleTimer = useIdleTimer({
        onIdle, timeout: 500, events: [],
    });

    return (
        <Container>
            <Row>
                <Col lg={8}>
                    <Row>
                        <Header2>Sjednejte si půjčku online bez poplatku</Header2>
                        <p>Kolik byste si u nás rádi půjčili?</p>
                        <Col lg={9}>
                            <Range
                                value={loanAmmount}
                                onChange={loanAmmountChange}
                                rangeMin={minimumLoanAmmount}
                                rangeMax={maximumLoanAmmount}
                                step={1000}
                            />
                        </Col>
                        <Col lg={3}>
                            <NumberInput
                                value={loanAmmount}
                                onChange={loanAmmountChange}
                                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    validateLoanAmmountInputRange(event);
                                    idleTimer.activate()
                                }}
                                rangeMin={minimumLoanAmmount}
                                rangeMax={maximumLoanAmmount}
                                ariaLabel="loan-ammount-input"
                                step={1000}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <p>Délkou splácení si určete výšku splátky</p>
                        <Col lg={9}>
                            <Range
                                value={repayLength}
                                onChange={repayLengthChange}
                                rangeMin={minimumRepayLength}
                                rangeMax={maximumRepayLength}
                                step={1}
                            />
                        </Col>
                        <Col lg={3}>
                            <NumberInput
                                value={repayLength}
                                onChange={repayLengthChange}
                                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    validateRepayLengthInputRange(event);
                                    idleTimer.activate()
                                }}
                                rangeMin={minimumRepayLength}
                                rangeMax={maximumRepayLength}
                                ariaLabel="repay-length-input"
                                step={1}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Switch 
                                checked={insurance}
                                onChange={insuranceChange}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                    <LoanCalculationResult
                        apr={apr}
                        monthlyPayment={monthlyPayment + insuranceRate}
                        totalRepayedAmmount={totalRepayedAmmount}
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default LoanCalculator;
