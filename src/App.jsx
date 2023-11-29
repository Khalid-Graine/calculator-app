import { useState } from "react";
import Histories from "./components/Histories";
import Title from "./components/Title";
import Calculator from "./components/Calculator";
import Bar from "./components/Bar";
function App() {
  const [expression, setExpression] = useState('')
  const [histories,setHistory] = useState([{
    expression: '10+10',
    result: '20',
    date: '10/12/2021',
  }])
  let type = (e) => {
   let number = e.target.textContent.trim();
   setExpression(`${expression}${number}`);

  //  chech if there is recent result
   if(typeof expression === 'number') {
    setExpression(number)
  } 
  
  }


  let deleteAll = () => {
    setExpression('')
  }
  
  let calculateExpression = () => {
    let result = eval(expression);
    try {
    if(typeof result === 'number') {
      setExpression(result)
    } 
    } catch (error) {
      alert(error)
    }
    
  }

  const removeLastNumber = () => {
    if(typeof expression != 'number') {
      setExpression(expression.slice(0,-1))
    }
   
  }
  return (
    <>
      <div className="w-11/12 mx-auto">
      <Title text={'calculator'} />
      
      <Bar {...{expression}} />
      <Calculator {...{type,removeLastNumber,deleteAll,calculateExpression}} />
      <Histories histories={histories} />
      </div>
    </>
  );
}

export default App;
