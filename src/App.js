import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import {TransactionContextProvider} from './context/TransactionContext'

function App() {
  return (
    <TransactionContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header/>
          <Balance/>
          <AddTransaction/>
          <IncomeList/>
          <ExpenseList/>
        </div>
      </div>
    </TransactionContextProvider>
    );
}

export default App;
