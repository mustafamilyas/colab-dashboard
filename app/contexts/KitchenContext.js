import React, { useState, createContext, useEffect } from 'react';
import { getQueue } from '../api/order';

export const KitchenContext = createContext();

const KitchenContextProvider = (props) => {
  const [todo, setTodo] = useState([
    {
      order_id: 3122,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2, isDone: true },
        { id: 2, name: 'Banana Split', count: 3, isDone: false },
        { id: 3, name: 'Banana Mix', count: 4, isDone: true },
        { id: 4, name: 'Banana Xtra', count: 2, isDone: true }
      ]
    },
    {
      order_id: 3123,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
    {
      order_id: 3124,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
  ]);
  const [queue, setQueue] = useState([
    // {
    //   id: 3142,
    //   name: 'Ilyas',
    //   table: 'C01',
    //   orders: [
    //     { id: 1, name: 'Banana Donut', count: 2 },
    //     { id: 2, name: 'Banana Split', count: 3 },
    //     { id: 3, name: 'Banana Mix', count: 4 },
    //     { id: 4, name: 'Banana Xtra', count: 2 }
    //   ]
    // },
    // {
    //   id: 3152,
    //   name: 'Ilyas',
    //   table: 'C01',
    //   orders: [
    //     { id: 1, name: 'Banana Donut', count: 2 },
    //     { id: 2, name: 'Banana Split', count: 3 },
    //     { id: 3, name: 'Banana Mix', count: 4 },
    //     { id: 4, name: 'Banana Xtra', count: 2 }
    //   ]
    // },
    // {
    //   id: 3172,
    //   name: 'Ilyas',
    //   table: 'C01',
    //   orders: [
    //     { id: 1, name: 'Banana Donut', count: 2 },
    //     { id: 2, name: 'Banana Split', count: 3 },
    //     { id: 3, name: 'Banana Mix', count: 4 },
    //     { id: 4, name: 'Banana Xtra', count: 2 }
    //   ]
    // },
  ]);
  const deleteTodo = (id) => {
    console.log('delete todo ', id, todo)
    setTodo([...todo.filter(e=>e.order_id !== id)])  
  }
  const deleteQueue = (id) => {
    setQueue([...queue.filter(e=>e.order_id !== id)])  
  }
  const addTodo = (id) => {
    console.log(id, queue);
    let newTodo = queue.find(e=>e.order_id === id);
    if(newTodo){
      newTodo.orders.map(e=>({...e,isDone: false}))
      setTodo([...todo, newTodo])
      deleteQueue(id)
    }
  }
  const toggleOrderItem = (orderId, itemId) => {
    setTodo(todo.map(e=>{
      if(e.order_id === orderId) {
        const changeIdx = e.orders.findIndex(e=>e.id === itemId);
        e.orders[changeIdx].isDone = !e.orders[changeIdx].isDone
      }
      return e
    }))
  }
  useEffect(() => {
    async function loadQueue() {
      const response = await getQueue();
      console.log(response);
      setQueue(response)
    }  
    loadQueue();
  }, [])
  const passedObj = {
    todo,
    queue,
    setQueue,
    setTodo,
    addTodo,
    toggleOrderItem,
    deleteQueue,
    deleteTodo
  }
  return (
    <KitchenContext.Provider value={passedObj}>
      {props.children}
    </KitchenContext.Provider>
  );
}
 
export default KitchenContextProvider;