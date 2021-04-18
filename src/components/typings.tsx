export  interface Itodo{
    id: number,
    content: string,
    complate: boolean
}

export interface Istate{
    todoList: Itodo[]   //Itodo的数组集合
}

export interface IAction{
    type: Action_type,
    payload: Itodo | number
}

export enum Action_type{
    ADD_TODO= 'addTodo',
    REMOVE_TODO='removeTodo',
    TOGGLE_TODO= 'toggle_todo'

}