import React ,{ useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import ExpenseTransaction from './ExpenseTransaction'


const ExpenseList = () => {
    const {expenseTrans} = useContext(TransactionContext)
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTrans.map(trans => (
                    <ExpenseTransaction trans={trans} key={trans.id}/>
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList
