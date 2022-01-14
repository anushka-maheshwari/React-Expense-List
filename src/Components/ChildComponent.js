import './ChildComponent.css';
import ChildComponent2 from './ChildComponent2';
function ChildComponent(props)
{
    return(
        <div className="expense-item">
            <ChildComponent2 date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>
    );
}
export default ChildComponent;