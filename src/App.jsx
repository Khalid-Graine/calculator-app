import { useState } from "react";
import Histories from "./components/Histories";
import Title from "./components/Title";
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
      <div className="border px-2  h-10 flex justify-end items-center">
     {expression} 
      </div>
      <main className=" grid grid-cols-4">
        <div className="col-span-4 grid grid-cols-4">
          <div  onClick={(e) => type(e)} className="box">(</div>
          <div  onClick={(e) => type(e)} className="box">)</div>
          <div onClick={() => removeLastNumber()} className="box">C</div>
          <div onClick={() => deleteAll()} className="box">delete</div>
        </div>
        <div className="col-span-3 grid  grid-cols-3">
          <div  onClick={(e) => type(e)} className="box">9</div>
          <div  onClick={(e) => type(e)} className="box">8</div>
          <div  onClick={(e) => type(e)} className="box">7</div>
          <div  onClick={(e) => type(e)} className="box">6</div>
          <div  onClick={(e) => type(e)} className="box">5</div>
          <div  onClick={(e) => type(e)} className="box">4</div>
          <div  onClick={(e) => type(e)} className="box">3</div>
          <div  onClick={(e) => type(e)} className="box">2</div>
          <div  onClick={(e) => type(e)} className="box">1</div>
        </div>
        <div>
          <div onClick={(e) => type(e)} className="box">/</div>
          <div onClick={(e) => type(e)} className="box">*</div>
          <div onClick={(e) => type(e)} className="box">-</div>
        </div>
        <div className=" col-span-4 grid grid-cols-4">
          <div onClick={(e) => type(e)} className="box">0</div>
          <div onClick={(e) => type(e)} className="box">.</div>
          <div onClick={() => calculateExpression()} className="box">=</div>
          <div onClick={(e) => type(e)}  className="box">+</div>
        </div>
      </main>
      <Histories histories={histories} />
      </div>
    </>
  );
}

export default App;
