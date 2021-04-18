import react from 'react';
import Input from './input/index';
import List from './list/index';
import {Itodo} from './typings';

export default ()=>{

      const addTodo=(obj: Itodo)=>{
        console.log('obj', obj)
      }
      return <div>
          <Input todoList={[]} addTodo={addTodo} />
          <List   />
      
      </div>
}