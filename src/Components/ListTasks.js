import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTasks=()=>{
    const tasks=useSelector(state=>state.tasks)
    const [show,setShow] = useState("All")
    return(
        <div>
           <button className="btnHeader" onClick={()=> setShow("All")} >All</button> 
           <button className="btnHeader" onClick={()=> setShow("Done")}>Done</button>
           <button className="btnHeader" onClick={()=> setShow("NotDone")}>NotDone</button>
       
        {
            show == "All" ?
            tasks.map(el=> <CardTask el={el}/>)
            :
            show == "Done" ? 
            tasks.filter(el=>el.done == true).map(el=> <CardTask el={el}/>)
            :
            tasks.filter(el=>el.done == false).map(el=> <CardTask el={el}/>)
        }
        </div>
    )
}
export default ListTasks