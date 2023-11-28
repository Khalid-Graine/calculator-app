import { useState } from "react";

function App() {
  const [expression, setExpression] = useState('')

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
    try {
      let result = eval(expression);
    if(typeof result === 'number') {
      setExpression(result)
    } 
    } catch (error) {
      alert(error)
    }
    
  }

  const removeLastNumber = () => {
    setExpression(expression.slice(0,-1))
  }
  return (
    <>
      <h3 className="text-center">calculator</h3>
      <div className="border px-2  h-10 flex justify-start items-center">
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
    </>
  );
}

export default App;
