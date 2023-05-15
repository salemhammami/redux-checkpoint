import { useDispatch } from "react-redux"
import { handleDelete, handleDone,handleEdit } from "../Redux/Actions"
import { useState } from "react"

const CardTask =({el})=>{
    const dispatch = useDispatch()

    const [edit,setEdit] = useState(false)
    const [text,setText] = useState(el.text)

    const hEdit=()=>{
        dispatch(handleEdit({id : el.id,text}))
        setEdit(!edit)
    }

    return ( <div className="tasks">
            {/* <h2 className={el.done && "textStyle"}> {el.text} </h2> */}
            {/* <h3>{el.done ? "TRUE" : "FALSE"}</h3> */}
            {
            edit ? <input className="searchStyle" type="text" onChange={(e)=>setText(e.target.value)} value={text}/> : <h2 className={el.done && "textStyle"}> {el.text}</h2>}

            <button className="btnDel" onClick={()=>dispatch(handleDelete(el.id))}>✖️</button>
            <button className="btnD" onClick={()=>dispatch(handleDone(el.id))}>✔️</button>
            <button className="btnEdit" onClick={()=> edit ? hEdit() : setEdit(!edit)}>{edit ? "Ok" : "🖋️"}</button>
            
            </div>
            ) 
}

export default CardTask