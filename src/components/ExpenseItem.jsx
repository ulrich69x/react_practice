import './ExpenseItem.css';
import Card from './CardComponent'
const ExpenseItem = (props) =>{
    
    return (
    <Card className="expense-item"> 
        <h1>{props.title}</h1>
    </Card>
    )

}

export default ExpenseItem;