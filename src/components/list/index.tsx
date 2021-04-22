import react, {FC, ReactElement} from 'react';
import {Itodo, Istate} from '../typings';
import Item from './item';

interface Iprops{
    todoList: Itodo[],
    removeTodo:(id:number)=>void,
    toggleTodo:(id:number)=>void,
}

const List:FC<Iprops> =({
    todoList,
    toggleTodo,
    removeTodo

}):ReactElement=>{
   
    return (
        <div>
            {
                todoList&&todoList.map(
                    (p:Itodo)=><Item
                    key={p.id}
                    todo={p}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo} />
                )
            }
        </div>
    )
   
};


export default List