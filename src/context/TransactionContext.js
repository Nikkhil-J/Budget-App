import React , {createContext, useReducer ,useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    incomeTrans: JSON.parse(localStorage.getItem('incomeTransaction')) || [],
    expenseTrans: JSON.parse(localStorage.getItem('expenseTransaction')) || []
}

export const TransactionContext = createContext(initialState);

export const TransactionContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('incomeTransaction',JSON.stringify(state.incomeTrans))
        localStorage.setItem('expenseTransaction',JSON.stringify(state.expenseTrans))
    })

    const addIncome = incomeTransaction => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }

    const addExpense = expenseTransaction => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DEL_TRANS',
            payload: id
        })
    }

    return(
        <TransactionContext.Provider value={{
            incomeTrans: state.incomeTrans,
            expenseTrans: state.expenseTrans,
            addIncome,addExpense,deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}