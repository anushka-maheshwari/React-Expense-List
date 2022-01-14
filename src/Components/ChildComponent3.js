import ChildComponent from "./ChildComponent";
import './ChildComponent3.css';
function ChildComponent3(props){
    return(
        <div className="expenses">
            { props.data.map(expense=>(<ChildComponent date={expense.date}  title={expense.title} price={expense.price}/>))}   
        </div>
    );
      
}
export default ChildComponent3;