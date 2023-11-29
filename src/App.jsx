import { useEffect, useState } from "react";
import Histories from "./components/Histories";
import Title from "./components/Title";
import Calculator from "./components/Calculator";
import Bar from "./components/Bar";
function App() {
  const [expression, setExpression] = useState("");
  const [histories, setHistory] = useState([]);

 

  let type = (e) => {
    let number = e.target.textContent.trim();
    setExpression(`${expression}${number}`);

    //  chech if there is recent result
    if (typeof expression === "number") {
      setExpression(number);
    }
  };

  let deleteAll = () => {
    setExpression("");
  };

  let calculateExpression = () => {
    let result;
    
    try {
      if(
        !expression.startsWith(0) &&
        !expression.startsWith('/') &&
        !expression.startsWith('*') &&
        !expression.startsWith(')')
         ) {
        result = eval(expression);
       } else {
        alert('invalid input');
       }
      if (typeof result === "number") {
        setExpression(result);
        setHistory((old) => {
          return [ GetTheNewHistory(result),...old];
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const removeLastNumber = () => {
    if (typeof expression != "number") {
      setExpression(expression.slice(0, -1));
    }
  };

  const GetTheNewHistory = (result) => {
    let NewHistory = {
      id: getRandomId(),
      expression: expression,
      result: result,
      date: getCurrentDate(),
    };
    return NewHistory;
  };

  const getRandomId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let h = date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes()  : date.getMinutes() ;
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds()  : date.getSeconds() ;
    let time = `${h}:${m}:${s}`
    let datee = `${day}/${month}/${year}`

    return `${time}`
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Title text={"calculator"} />
        <Bar {...{ expression }} />
        <Calculator
          {...{ type, removeLastNumber, deleteAll, calculateExpression }}
        />
        <Histories histories={histories} />
      </div>
    </>
  );
}

export default App;
