import React ,{ useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import IncomeTransaction from './IncomeTransaction'


const IncomeList = () => {
    const {incomeTrans} = useContext(TransactionContext)
    // console.log(incomeTrans)
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTrans.map(trans => (
                    <IncomeTransaction trans={trans} key={trans.id}/>
                ))}
            </ul>
        </div>
    )
}

export default IncomeList


