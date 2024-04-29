// import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Input from './components/Search-icon';
import Navbar from './Navbar';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  

  const transaction = [
    {
        date:'13/Apr/2020',
        category:'Income',
        description:'withdraw income',
        amount: "600"
    },{
        date:'14/May/2020',
        category:'Food',
        description:'lunch and dinner',
        amount: "400"
    },{
        date:'19/Feb/2020',
        category:'Fashion',
        description:'Suits and trousers',
        amount: "300"
    }
]

  return (
   
    <div className='container'>
      <Navbar />
      <Form details={transaction}/>
      <Input  details={transaction}/>
      <Table details={transaction}/>
    </div>
  );
}

export default App;
