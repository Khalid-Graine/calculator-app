import React from 'react'
import Title from './Title'
import NoResult from './NoResult'


const Histories = ({histories}) => {
  return (
    <div>

      <Title text={'Histories'} />
    <ul >
      {histories.length === 0 && <NoResult text={'there is no histories yet'} />}
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