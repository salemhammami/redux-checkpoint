import { findAllByAltText } from "@testing-library/react"
import { ADDTASK, HANDLEDELETE, HANDLEDONE,HANDLEEDIT } from "./TypeActions"


const initialState={
    tasks:[
    
        {text:"Task_1",id:Math.random(),done:false},
        {text:"Task_2",id:Math.random(),done:false},
    ]

    
}

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADDTASK : return {...state,tasks:[{text:action.payload,id:Math.random(),done:false},...state.tasks]}
        case HANDLEDONE : return {...state, tasks : state.tasks.map(el => el.id == action.payload ? {...el,done : !el.done} : el) }
        case HANDLEDELETE :return{...state, tasks:state.tasks.filter(el => el.id != action.payload)}
        case HANDLEEDIT : return {...state,tasks : state.tasks.map(el=> el.id == action.payload.id ? {...el,text : action.payload.text} : el)}

        default: return state
    }
}

export default Reducer