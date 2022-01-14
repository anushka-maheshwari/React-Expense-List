import "./ChildComponent2.css";
function ChildComponent2(props){
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const year=props.date.getFullYear();
    const date=props.date.getDate();
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    )

}
export default ChildComponent2;