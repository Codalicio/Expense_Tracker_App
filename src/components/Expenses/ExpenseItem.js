import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setAmount(234);
    setTitle('Updated Item');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate newDate={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
