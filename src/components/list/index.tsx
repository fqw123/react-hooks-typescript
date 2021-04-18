import react, {FC, ReactElement} from 'react';
import {Itodo, Istate} from '../typings';
import Item from './item';

interface Iprops{
    todoList: Itodo[]
}

const List:FC<Iprops> =({todoList}):ReactElement=>{

    return (
        <div>
            {
                todoList&&todoList.map(
                    p=><Item  todo={p}  />
                )
            }
        </div>
    )
   
};


export default List