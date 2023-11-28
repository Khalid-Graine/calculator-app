import { useState } from "react";

function App() {
  const [opration, setOperation] = useState('')

  let type = (e) => {
   let v = e.target.textContent.trim();
   setOperation(`${opration}${v}`)
  }
  let deleteAll = () => {
    setOperation('')
  }
  return (
    <>
      <h3 className="text-center">calculator</h3>
      <div className="border px-2">
      <p>{opration} </p>
      </div>
      <main className=" grid grid-cols-4">
        <div className="col-span-4 grid grid-cols-4">
          <div  onClick={(e) => type(e)} className="box">(</div>
          <div  onClick={(e) => type(e)} className="box">)</div>
          <div className="box">C</div>
          <div onClick={() => deleteAll()} className="box">delete</div>
        </div>
        <div className="col-span-3 grid  grid-cols-3">
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">9</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">8</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">7</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">6</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">5</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">4</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">3</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">2</div>
          <div onClick={(e) => type(e)} onClick={(e) => type(e)} className="box">1</div>
        </div>
        <div>
          <div onClick={(e) => type(e)} className="box">/</div>
          <div onClick={(e) => type(e)} className="box">*</div>
          <div onClick={(e) => type(e)} className="box">-</div>
        </div>
        <div className=" col-span-4 grid grid-cols-4">
          <div onClick={(e) => type(e)} className="box">0</div>
          <div onClick={(e) => type(e)} className="box">.</div>
          <div className="box">=</div>
          <div onClick={(e) => type(e)}  className="box">+</div>
        </div>
      </main>
    </>
  );
}

export default App;
