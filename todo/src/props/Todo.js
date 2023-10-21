import React,{useState, useEffect} from 'react'
import AddToDo from './AddToDo'
import Distodo from './Distodo'

const Todo = () => {
    const [alltodo, setalltodo] = useState([] && JSON.parse(localStorage.getItem("todos")))
    const [Count, setCount] = useState(0)
    const [caculation, setCaculation] = useState(0)
    const save = (onetodo) => {
        setalltodo([...alltodo, onetodo])
      
        console.log(alltodo)
        

    }
    const secount = () =>{
        setCount(Count + 1)
    }
    useEffect(() => {
      setCaculation(Count * 2)
    
      localStorage.setItem("todos", JSON.stringify(alltodo))
    }, [alltodo])
    

  return (
    <div>
        <AddToDo add={save}/>
        <Distodo displ={alltodo}/>

        <h1>{Count}</h1>
        <h1>{caculation}</h1>
        <button onClick={secount}>set</button>
    </div>
  )
}

export default Todo