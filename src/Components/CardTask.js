import { useDispatch } from "react-redux"
import { handleDelete, handleDone } from "../Redux/Actions"

const CardTask =({el})=>{
    const dispatch = useDispatch()
    return ( <div className="tasks">
            <h2 className={el.done && "textStyle"}> {el.text} </h2>
            {/* <h3>{el.done ? "TRUE" : "FALSE"}</h3> */}
            <button className="btnDel" onClick={()=>dispatch(handleDelete(el.id))}>✖️</button>
            <button className="btnD" onClick={()=>dispatch(handleDone(el.id))}>✔️</button>
            </div>
            ) 
}

export default CardTask