import React from 'react'

const Histories = ({histories}) => {
  return (
    
    <ul className='mt-2'>
      {histories && 
      histories.map((h) => (
        <li className='flex justify-between border '>
         <div className='flex gap-4'>
         <p>{h.expression}</p>
          <span>=</span>
          <p>{h.result}</p>
         </div>
          <p >{h.date}</p>
        </li>
      )
      )
      }
    </ul>
  )
}

export default Histories