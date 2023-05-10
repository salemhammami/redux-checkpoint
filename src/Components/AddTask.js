
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const dispatch=useDispatch()
    const [textP,setTextP]=useState('')
    return(
        <div>
            <input className="searchStyle" onChange={(e)=>setTextP(e.target.value)} type="text"/>
            <button className="btnHeader" onClick={()=>dispatch(addTask(textP))}>Add</button>
        </div>
    )
}
export default AddTask