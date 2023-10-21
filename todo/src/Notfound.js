import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const go =()=>{
         navigate('/')
    }
  return (
    <div>
        <h1>File not found</h1>
        <button onClick={go}>Go home</button>
    </div>
  )
}

export default Notfound