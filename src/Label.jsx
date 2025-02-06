import React from 'react'

function Label() {
  return (
    
    <div className='hidden  lg:block'>
      <div className='grid grid-cols-3 bg-black text-white m-18 pt-16 pb-16 rounded-lg'>
        <div>
          <h1 className='font-bold text-4xl text-center'>+ 500</h1>
         <h1 className='text-center text-xl'>Payment methods</h1>
      </div>
        <div>
           <h1 className='font-bold text-4xl text-center'>26677650</h1>
           <h1 className='text-center text-xl'>Transactions</h1>
        </div>
        <div>
          <h1 className='font-bold text-4xl text-center'>190 countries</h1>
          <h1 className='text-center text-xl'>Global presence</h1>
        </div>
     
      </div>
    </div>
  )
}

export default Label