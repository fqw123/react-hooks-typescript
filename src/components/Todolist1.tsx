import react , {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import Input from './input/index';
import List from './list/index';
import {Itodo} from './typings';

 const TodoList:FC = ():ReactElement => {
     const [todoList, setTodolist] = useState<Itodo[]>([])

      const addTodo = useCallback((todo: Itodo)=>{
        setTodolist((todoList)=>[...todoList, todo ])
      }, [])

      useEffect(
          ()=>{
            console.log("todoList", todoList)
          }, [todoList]
      )
      return <div>
          <Input todoList={todoList} addTodo={addTodo} />
          {/* <List   /> */}
      
      </div>
}

export default TodoList;

// 需要父组件传给子组件的函数都用useCallback包一下