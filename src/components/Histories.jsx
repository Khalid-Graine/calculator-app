import React from "react";
import Title from "./Title";
import NoResult from "./NoResult";

const Histories = ({ histories, deleteHistory, updateHistory }) => {
  return (
    <div>
      <Title text={"Histories"} />
      <ul>
        {histories.length === 0 && (
          <NoResult text={"You have not any histories yet"} />
        )}
        {histories &&
          histories.map((h) => (
            <li key={h.id} className="flex justify-between border p-1">
              <div className="flex gap-4">
                <p>{h.expression}</p>
                <span>=</span>
                <p>{h.result}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm">{h.date}</p>
                <button
                  onClick={() => deleteHistory(h.id)}
                  className="bg-red-200 hover:bg-red-300 px-2 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Histories;
