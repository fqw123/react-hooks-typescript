import react, {useRef, FC, ReactElement} from 'react';
import { isTemplateExpression } from 'typescript';
import { Itodo } from '../typings';

interface Iprops{
  addTodo: (todo: Itodo)=>void,
  todoList: Itodo[]
}

const Input: FC<Iprops> =({
    addTodo,
    todoList
}): ReactElement=>{
    const inputRef = useRef<HTMLInputElement>(null)
    const addItem = ():void =>{
        const val:string = inputRef.current!.value.trim();
        if(val.length){

            const isExist = todoList.find(item => item.content  === val);
            if(isExist){
                alert('该值已存在');
                return;
            }
            addTodo({
                id: new Date().getTime(),
                content: val,
                complate: false
            })
            inputRef.current!.value = '';
        }
        
    }
    
    return <div>
        <input  type="text" placeholder="请输入字符串"  ref={inputRef}/>
        <button onClick={addItem} > 增加</button>
    </div>
}
export default Input

// 非空断言操作符叹号 例如： x! 将从 x 值域中排除 null 和 undefined.