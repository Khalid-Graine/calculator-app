import { useState } from "react";

function App() {
  let type = (e) => {
   console.log(e.target.textContent.trim())
  }
  return (
    <>
      <h3 className="text-center">calculator</h3>
      <div className="">
        <form >
          <input type="text" className="border w-full my-1" />
        </form>
      </div>
      <main className=" grid grid-cols-4">
        <div className="col-span-4 grid grid-cols-4">
          <div className="box">(</div>
          <div className="box">)</div>
          <div className="box">C</div>
          <div className="box">delete</div>
        </div>
        <div className="col-span-3 grid  grid-cols-3">
          <div className="box">9</div>
          <div className="box">8</div>
          <div className="box">7</div>
          <div className="box">6</div>
          <div className="box">5</div>
          <div className="box">4</div>
          <div className="box">3</div>
          <div className="box">2</div>
          <div className="box">1</div>
        </div>
        <div>
          <div className="box">/</div>
          <div className="box">*</div>
          <div className="box">-</div>
        </div>
        <div className=" col-span-4 grid grid-cols-4">
          <div className="box">0</div>
          <div className="box">.</div>
          <div className="box">=</div>
          <div onClick={(e) => type(e)} className="box">+</div>
        </div>
      </main>
    </>
  );
}

export default App;
