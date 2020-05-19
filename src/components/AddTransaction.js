import React , {useState,useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'

const AddTransaction = () => {
    const {addIncome,addExpense} = useContext(TransactionContext)

    const [income, setIncome] = useState({
        incomeText:'',
        incomeAmount:0
    })

    const {incomeText,incomeAmount} = income

    const handleChangeIncome =(e) =>{
        setIncome({...income,[e.target.name]:e.target.value})
    }

    const onSubmitIncome =(e) => {
        e.preventDefault();

        if(incomeText!==''){
            const newIncomeTransaction = {
                id: Date.now(),
                incomeText,
                incomeAmount:incomeAmount*1
            }
    
            console.log(newIncomeTransaction)
    
            addIncome(newIncomeTransaction)
            setIncome({
                incomeText:'',
                incomeAmount:0
            })
        }

        
    }

    const [expense, setExpense] = useState({
        expenseText:'',
        expenseAmount:0
    })

    const {expenseText,expenseAmount} = expense

    const handleChangeExpense =(e) =>{
        setExpense({...expense,[e.target.name]:e.target.value})
    }

    const onSubmitExpense =(e) => {
        e.preventDefault();

        if(expenseText!==''){
            const newExpenseTransaction = {
                id: Date.now(),
                expenseText,
                expenseAmount:expenseAmount*1
            }
    
            console.log(newExpenseTransaction)
    
            addExpense(newExpenseTransaction)
            setExpense({
                expenseText:'',
                expenseAmount:0
            })
        }

        
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" 
                    placeholder="Add Income.." autoComplete="off"
                    value={income.incomeText}
                    name="incomeText"
                    onChange={handleChangeIncome}
                    />
                    <input type="number" 
                    placeholder="Amount.." 
                    autoComplete="off"
                    value={income.incomeAmount}
                    name="incomeAmount"
                    onChange={handleChangeIncome}
                    />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text" 
                    placeholder="Add Expense.." autoComplete="off"
                    value={expense.expenseText}
                    name="expenseText"
                    onChange={handleChangeExpense}
                    />
                    <input type="number" 
                    placeholder="Amount.." 
                    autoComplete="off"
                    value={expense.expenseAmount}
                    name="expenseAmount"
                    onChange={handleChangeExpense}
                    />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
