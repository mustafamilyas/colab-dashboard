import React, { useState, createContext, useEffect } from 'react';
import { getQueue } from '../api/order';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  // name: '',
  //   table: '',
  //   successOrder: '',
  //   orders: [],
  //   modalState: 0,
  //   isModalShow: true
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  
  const deleteTodo = (id) => {
    console.log('delete todo ', id, todo)
    setTodo([...todo.filter(e=>e.order_id !== id)])  
  }
  const deleteQueue = (id) => {
    setQueue([...queue.filter(e=>e.order_id !== id)])  
  }
  const addOrder = (newOrder => {
    let idx = state.orders.findIndex(item => item.id === newOrder.id);
    if(idx === -1) {
      return Object.assign({}, state, {
        orders: state.orders.concat(newOrder)
      });
    } else {
      return Object.assign({}, state, {
        orders: state.orders.map(
          (order, i) => (i === idx ? 
            {...order, count: order.count+newOrder.count} : order))
      });
    }
  })
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
    
  }
  return (
    <OrderContext.Provider value={passedObj}>
      {props.children}
    </OrderContext.Provider>
  );
}
 
export default OrderContextProvider;