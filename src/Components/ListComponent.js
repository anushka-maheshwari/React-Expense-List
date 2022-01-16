import ExpenseComponent from "./ExpenseComponent";
import './ListComponent.css';
function ListComponent(props){
    return(
        <div className="expenses">
            { props.data.map(expense=>(<ExpenseComponent key={expense.title} date={expense.date}  title={expense.title} price={expense.price}/>))}   
        </div>
    );
      
}
export default ListComponent;