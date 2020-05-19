import React ,{useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import {FaTrashAlt} from 'react-icons/fa'

const IncomeTransaction = ({trans}) => {
    const {deleteTransaction} = useContext(TransactionContext)
    return (
        <li className="transaction">
            <span className="transaction-text">
                {trans.incomeText}
            </span>
            <span className="transaction-amount">
                {trans.incomeAmount}
            </span>
            <button onClick={() => deleteTransaction(trans.id)} className="delete-btn">
                <FaTrashAlt/>
            </button>
        </li>
    )
}

export default IncomeTransaction
