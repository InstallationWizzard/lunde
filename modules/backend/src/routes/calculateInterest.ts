/*=============================================
                    Imports
=============================================*/
// Packages
import express from 'express';
import 'dotenv/config'
import {Loan} from '@dazlab-team/loan-calc';
/*=============================================
                Environment
=============================================*/
const
    router = express.Router();
/*=============================================
                Utils
=============================================*/
const compoundInterest = (
    principal: number,
    rate: number,
    months: number = 1
) => {
    const compoundedAmmount = principal * (Math.pow((1 + ((rate / 100) / (months / 12))), (months / 12)));
    return compoundedAmmount;
};
/*=============================================
                Get routes
=============================================*/
router.route('/').get(async (req, res) => {
    const loanAmount = Number(req.query.loanAmount)
    const apr = Number(req.query.apr)
    // In months
    const repayLength = Number(req.query.repayLength)

    let loan = new Loan();
    loan.amount = loanAmount;
    loan.years = repayLength / 12;
    loan.interestRate = apr;
    
    const responseData = {
        monthlyPayment: loan.payments[0].amount,
        totalRepayedAmmount: loan.totalCost
    }
    res.status(200).send(responseData)
})
/*=============================================
                Post routes
=============================================*/
export default router