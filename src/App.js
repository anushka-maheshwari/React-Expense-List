import React,{useState} from 'react';
import ChildComponent3 from './Components/ChildComponent3';
import ChildComponent4 from './Components/ChildComponent4';
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
  const[dataval,setdata]=useState(data);
  const getDataValue=(getval)=>{
    const updateddata=[getval,...dataval]
    setdata(updateddata);
  }
  return (
    <div>
      <ChildComponent4 onGetData={getDataValue}/>
      <ChildComponent3 data={dataval}/>  
    </div>
  );
}
export default App;
