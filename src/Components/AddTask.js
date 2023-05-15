
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

// const AddTask=()=>{
//     const dispatch=useDispatch()
//     const [textP,setTextP]=useState('')
//     return(
//         <div>
//             <input className="searchStyle" onChange={(e)=>setTextP(e.target.value)} type="text"/>
//             <button className="btnHeader" onClick={()=>dispatch(addTask(textP))}>Add</button>
//         </div>
//     )
// }

const AddTask =()=>{
    const [textP,setTextP]=useState("")
    const dispatch=useDispatch()
    const handelReset=()=>{
        setTextP('')
        dispatch(addTask(textP))
    }

    const handleKey=(e)=>{
        if (e.key === "Enter"  &&textP !=='') {
            handelReset()
        } 

        if (e.key === "Enter"  &&textP =='') {
            alert("feragh") 
        } 
    }

    return(
        <div className="nn"> 
            <input className="searchStyle" onKeyDown={(e)=> handleKey(e) } value={textP} onChange={(e)=>setTextP(e.target.value)} type="text"/>

            <button className="btnHeader" onClick={()=>textP ==='' ? alert("Write your To do Text!") : handelReset()}>Add</button>

        </div>
    )
}
export default AddTask