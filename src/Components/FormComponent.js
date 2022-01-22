import './FormComponent.css';
import React,{useState} from 'react';
function FormComponent(props)
{
    const[titleVal,setTitleVal]=useState('');
    const[priceVal,setPriceVal]=useState('');
    const[dateVal,setDateVal]=useState('');
    const titleValue=(event)=>
    {
        
        setTitleVal(event.target.value);
    }
    const priceValue=(event)=>
    {
        setPriceVal(event.target.value);
    }
    const dateValue=(event)=>
    {
        setDateVal(event.target.value);
    }
    const submitHandler=(event)=>
    {
        console.log(titleVal,priceVal,dateVal);
        event.preventDefault();
        if(titleVal==='' && priceVal===isNaN() && dateVal==='')
        {
            alert("enter the values of all the field");
            setTitleVal('');
            setPriceVal('');
            setDateVal('');
        }
        if(titleVal==='' || priceVal===isNaN() || dateVal==='')
        {
            alert("enter the value of empty field");
            setTitleVal('');
            setPriceVal('');
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
        setPriceVal('');
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
                    <input type="text" value={titleVal} onChange={titleValue}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Price</lable>
                    <input type="number" value={priceVal} min="0.01" step="0.01" onChange={priceValue}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Date</lable>
                    <input type="date" value={dateVal} onChange={dateValue}/>
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