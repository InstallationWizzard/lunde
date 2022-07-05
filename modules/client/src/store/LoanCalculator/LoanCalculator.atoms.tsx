import {
    atom
} from 'recoil';

export const insuranceState = atom({
    key: 'insuranceState',
    default: false,
});

export const loanAmmountState = atom({
    key: 'loanAmmountState',
    default: 200_000,
});

export const aprState = atom({
    key: 'aprState',
    default: 3,
});

export const insuranceRateState = atom({
    key: 'insuranceRateState',
    default: 400,
});

export const repayLengthState = atom({
    key: 'repayLengthState',
    default: 12,
});

export const minimumLoanAmmountState = atom({
    key: 'minimumLoanAmmountState',
    default: 5_000,
});

export const maximumLoanAmmountState = atom({
    key: 'maximumLoanAmmountState',
    default: 800_000,
});

export const minimumRepayLengthState = atom({
    key: 'minimumRepayLengthState',
    default: 12,
});

export const maximumRepayLengthState = atom({
    key: 'maximumRepayLengthState',
    default: 96,
});