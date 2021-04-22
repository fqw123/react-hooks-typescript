import react , {FC, ReactElement, useCallback, useEffect, useReducer} from 'react';
import Input from './input/index';
import List from './list/index';
import {Itodo, Istate, Action_type} from './typings';
import {todoReducer} from './reducer';
 const TodoList:FC = ():ReactElement => {
    //  const [todoList, setTodolist] = useState<Itodo[]>([])
    const initialState: Istate = {
      todoList: []
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

      const addTodo = useCallback((todo: Itodo)=>{
        dispatch({
          type: Action_type.ADD_TODO,
          payload: todo
        })
      }, [])
      const toggleTodo = useCallback((id: number) : void=>{
        dispatch({
          type: Action_type.TOGGLE_TODO,
          payload: id,
        })
      }, [])

      const removeTodo = useCallback((id:number): void=>{
          dispatch({
            type: Action_type.REMOVE_TODO,
            payload: id
          })
      }, [])
      useEffect(
          ()=>{
            console.log("todoList", state.todoList)
          }, [state.todoList]
      )
      return <div>
          <Input todoList={state.todoList} addTodo={addTodo} />
          <List  todoList={state.todoList}  toggleTodo={toggleTodo} removeTodo={removeTodo}   />
      
      </div>
}

export default TodoList;

// 需要父组件传给子组件的函数都用useCallback包一下