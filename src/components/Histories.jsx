import React from 'react'

const Histories = ({histories}) => {
  return (
    <ul>
      {histories && 
      histories.map((h) => (
        <li>
          <p>{h.expression}</p>
          <p>{h.result}</p>
          <p>{h.date}</p>
        </li>
      )
      )
      }
    </ul>
  )
}

export default Histories