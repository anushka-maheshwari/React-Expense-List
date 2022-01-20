import React,{useState} from 'react';
import ListComponent from './Components/ListComponent';
import FormComponent from './Components/FormComponent';
let data=[
  {
    title:"Car Insurance",
    price:200,
    date:new Date(2021,5,12)
  },
  {
    title:"Home Loans",
    price:300,
    date:new Date(2021,6,8)
  },
  {
    title:"Food",
    price:400,
    date:new Date(2021,9,7)
  },
  {
    title:"Books",
    price:500,
    date:new Date(2021,10,4)
  },
  {
    title:"School Fees",
    price:600,
    date:new Date(2021,5,12)
  }
];
function App() {
  const[dataVal,setData]=useState(data);
  const getDataValue=(getval)=>{
  const updateddata=[getval,...dataVal]
  setData(updateddata);
  }
  return (
    <div>
      <FormComponent onGetData={getDataValue}/>
      <ListComponent data={dataVal}/>  
    </div>
  );
}
export default App;
