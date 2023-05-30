import React from 'react';
import { useState } from "react";
import Todos from './todo';

 export const Cart = () => {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]); 

  function increment(){
    setCount((i) => i + 1)
  }

  return (
    <div>
      <Todos todos={todos}/>
      <hr />
      Count: {count}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Cart;