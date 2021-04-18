import react, {FC, ReactElement} from 'react';
import {Itodo} from '../typings';

interface Iprops{
    todo: Itodo
}

const Item:FC<Iprops> =():ReactElement=>{
    return <div>List组件</div>
};


export default Item;