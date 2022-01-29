import './FormComponent.css';
import React,{useState} from 'react';
function FormComponent(props)
{
    const[titleVal,setTitleVal]=useState('');
    const[priceVal,setPriceVal]=useState(0);
    const[dateVal,setDateVal]=useState('');
    const submitHandler=(event)=>
    {
        console.log(titleVal,priceVal,dateVal);
        event.preventDefault();
        if(titleVal==='' || dateVal==='')
        {
            alert("enter the  value of empty field");
            setTitleVal('');
            setPriceVal(0);
            setDateVal('');
        }
        else{
            const data1={
                title:titleVal,
                price:priceVal,
                date:new Date(dateVal)
            }
        console.log(data1)
        setTitleVal('');
        setPriceVal(0);
        setDateVal('');
        props.onGetData(data1);
        }
    }

return(
    <div className='new-expense'>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <lable>Title</lable>
                    <input type="text" value={titleVal} pattern="[a-zA-Z]+" onChange={(e)=>{setTitleVal(e.target.value)}}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Price</lable>
                    <input type="number" value={priceVal}  onChange={(e)=>{setPriceVal(e.target.value)}}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Date</lable>
                    <input type="date" value={dateVal} onChange={(e)=>{setDateVal(e.target.value)}}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
);
}
export default FormComponent;