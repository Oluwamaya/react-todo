import React,{useState} from 'react'


const AddToDo = ({add}) => {
    const[onetodo, setonetodo] = useState("")
  return (
    <div>
       <input className='from-control' placeholder="Todo" onChange={(e) =>setonetodo(e.target.value)} type="text" />
       <button onClick={()=>add(onetodo)} className='btn btn-primary'>addTOdo</button>
    </div>
  )
}

export default AddToDo