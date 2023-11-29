import { useState } from "react";
import Histories from "./components/Histories";
import Title from "./components/Title";
import Calculator from "./components/Calculator";
import Bar from "./components/Bar";
function App() {
  const [expression, setExpression] = useState("");
  const [histories, setHistory] = useState([
    {
      id: 34,
      expression: "10+10",
      result: "20",
      date: "10/12/2021",
    },
  ]);
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
    let result = eval(expression);
   
    try {
      if (typeof result === "number") {
        setExpression(result);


        setHistory((old) => {
        console.log(Math.floor(Math.random() * 20))
        let NewHistory = {
          id: getRandomId(),
          expression: expression,
          result: result,
          date: 'date',
        }
        console.log(expression + '=' + result )
        return old
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

  const getRandomId = () =>{
   return  Math.floor(Math.random() * 1000)
  }
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
