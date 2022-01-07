import React, { useState } from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const expenseDate = props.date
    // let expenseTitle = props.title
    const expenseAmount = props.amount

    const [expenseTitle, setexpenseTitle] = useState(props.title);

    const clickedHandler = () => { setexpenseTitle('updated') }

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate} />
            {/* <div>{expenseDate.toDateString()}</div> */}
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{"$"+expenseAmount}</div>
            </div>
            <button onClick = { clickedHandler } >Change Title</button>
        </Card>
    );
}

export default ExpenseItem