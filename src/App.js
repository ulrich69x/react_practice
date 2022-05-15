import ExpenseItem from "./components/ExpenseItem"; 

function App() {
  const data= [{
    title: "1st Title"
  },
  {
    title: "2nd neww title"
  }]
  return (
    <div>
     <ExpenseItem title={data[0].title}/>
     <ExpenseItem title={data[1].title}/>
    </div>
  );
}

export default App;
