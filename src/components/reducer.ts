import {Istate,Action_type, IAction} from './typings';

function  todoReducer(state: Istate, action: IAction): Istate{
    const { type, payload} = action;
   switch(type){
       default:
           return state
   }
}

export {todoReducer};