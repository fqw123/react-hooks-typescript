import react, {FC, ReactElement} from 'react';
import {Itodo} from '../typings';

interface  Iprops{
    todo: Itodo;
    toggleTodo:(id:number)=>void;
    removeTodo: (id:number) => void;
}
const TdItem:FC<Iprops> = ({ 
    todo,
    toggleTodo,
    removeTodo
}):ReactElement =>{

    const {id, content, complate} =  todo;
    return (
        <div className="todo-item">
            <input 
            type= "checkbox"
            checked={complate}
            onChange={()=>toggleTodo(id)}
            />
            <span>{ content }</span>
            <button
            onClick={()=>removeTodo(id)}
            >删除</button>
        </div>
    )
}


export default TdItem;