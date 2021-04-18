import {Istate,Action_type, IAction, Itodo} from './typings';

function  todoReducer(state: Istate, action: IAction): Istate{
    const { type, payload} = action;
    console.log("payload", payload);
   switch(type){
       case Action_type.ADD_TODO:
           return{
                ...state,
                todoList: [...state.todoList, payload as Itodo ]   
           }
        case Action_type.REMOVE_TODO:
            return{
                ...state,
                todoList: state.todoList.filter(p=>p.id !== payload)
            }
        case Action_type.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(
                    todo=>{
                        return todo.id === payload ?
                        {
                            ...todo,
                            complate: !todo.complate
                        }
                        :
                        {
                            ...todo
                        }
                    }
                )
            }
       default:
           return state
   }
}

export {todoReducer};

// as为类型断言， 变量有多个类型时候，在此场景只能使用一种类型，手动指定一个类型