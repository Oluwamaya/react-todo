import React from 'react'

const Distodo = ({displ}) => {
    console.log(displ)
  return (
    <div className='text-center m-auto'>
        {
            displ.map((el,i)=>(
              <h1>{i + 1}:{el}</h1>  
            ))
        }

    </div>
  )
}

export default Distodo