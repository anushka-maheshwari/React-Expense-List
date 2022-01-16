import './ExpenseComponent.css';
import DateComponent from './DateComponent';
function ExpenseComponent(props)
{
    return(
        <div className="expense-item">
            <DateComponent date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>
    );
}
export default ExpenseComponent;