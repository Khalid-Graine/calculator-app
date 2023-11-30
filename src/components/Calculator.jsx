import React from 'react'

const Calculator = ({type,removeLastNumber,deleteAll,calculateExpression}) => {
  return (
    <main className=" grid grid-cols-4 ">
        <div className="col-span-4 grid grid-cols-4">
          <div  onClick={(e) => type(e)} className="box">(</div>
          <div  onClick={(e) => type(e)} className="box">)</div>
          <div onClick={() => removeLastNumber()} className="box">C</div>
          <div onClick={() => deleteAll()} className="box bg-red-100">delete</div>
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
          <div onClick={() => calculateExpression()} className="box bg-blue-100">=</div>
          <div onClick={(e) => type(e)}  className="box">+</div>
        </div>
      </main>
  )
}

export default Calculator