import React  from 'react'
import Button from './props/Button'

const User = () => {
const useedit = () => {
alert("hello")
}
const usedelete = () => {
    alert("delete")
}
const useSubmit = () =>{
    alert("submit")
}

return (
    <div>
        <Button color='btn btn-warning position-fixed end-0 top-50' name='edit' click={useedit} />
        <Button color='btn btn-primary position-fixed start-0 top-50' name='delete' click={usedelete} />
        <Button color='btn btn-success position-fixed top-0 start-50' name='submit' click={useSubmit} />
        
    </div>
  )

}
export default User