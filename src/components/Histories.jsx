import React from 'react'
import Title from './Title'


const Histories = ({histories}) => {
  return (
    <div>

      <Title text={'Histories'} />
    <ul >
      {histories && 
      histories.map((h) => (
        <li key={h.id} className='flex justify-between border '>
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
    </div>
  )
}

export default Histories