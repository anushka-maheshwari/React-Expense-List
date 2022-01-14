import './ChildComponent4.css';
import React,{useState} from 'react';
function ChildComponent4(props)
{
    const[titleval,settitleval]=useState('');
    const[priceval,setpriceval]=useState('');
    const[dateval,setdateval]=useState('');
    const titlevalue=(event)=>
    {
        settitleval(event.target.value);
    }
    const pricevalue=(event)=>
    {
        setpriceval(event.target.value);
    }
    const datevalue=(event)=>
    {
        setdateval(event.target.value);
    }
    const submithandler=(event)=>
    {
        event.preventDefault();
        const data1={
            title:titleval,
            price:priceval,
            date:new Date(dateval)
        }
        console.log(data1)
        settitleval('');
        setpriceval('');
        setdateval('');
        props.onGetData(data1);
    }

return(
    <div className='new-expense'>
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <lable>Title</lable>
                    <input type="text" value={titleval} onChange={titlevalue}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Price</lable>
                    <input type="number" value={priceval} min="0.01" step="0.01" onChange={pricevalue}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Date</lable>
                    <input type="date" value={dateval} onChange={datevalue}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
);
}
export default ChildComponent4;