import ExpenseItem from "./components/ExpenseItem"; 
import React from 'react'
import ReactDOM from 'react-dom'
function App() {
  const data= [{
    title: "1st Title"
  },
  {
    title: "2nd neww title"
  }]
  console.log(data[0].title);
  return (
    
    <div>
     <ExpenseItem title={data[0].title}/>
     <ExpenseItem title={data[1].title}/>
    </div>
  );
}

export default App;
