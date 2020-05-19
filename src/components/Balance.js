import React , {useContext} from 'react'
import {TransactionContext } from '../context/TransactionContext'

const Balance = () => {
    const {incomeTrans, expenseTrans} = useContext(TransactionContext)

    const incomeAmounts = incomeTrans.map(
        trans => trans.incomeAmount
    )

    const expenseAmounts = expenseTrans.map(
        trans => trans.expenseAmount
    )

    const totalIncome = incomeAmounts
        .reduce((acc,item) => (acc+=item),0)
        .toFixed(2)

    const totalExpense = expenseAmounts
        .reduce((acc,item) => (acc+=item),0)
        .toFixed(2)

    console.log(totalIncome, totalExpense)

    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h3>${(totalIncome-totalExpense).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
