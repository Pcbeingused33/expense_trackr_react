import React from 'react';
import { Header } from './Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/TransactionList';

import { GlobalProvider } from './GlobalState';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </div>
  );
}

export default App;
