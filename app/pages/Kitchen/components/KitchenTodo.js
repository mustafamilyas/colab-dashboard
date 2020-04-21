import React, {useContext} from 'react';
import { KitchenContext } from '../../../contexts/KitchenContext';

const KitchenTodo = (props) => {
    const {deleteTodo, toggleOrderItem} = useContext(KitchenContext)
    const {order_id, name, table, orders} = props.todo;
    return (
        <div className='kitchen-todo'>
            <div className="kitchen-todo__number">#{order_id}</div>
            <div className="kitchen-todo__header">
                <div>{name}</div>
                <div>{table}</div>
            </div>
            <div className="kitchen-todo__items">
                {orders.map(e=>(
                    <div
                        key={e.id}
                        onClick={()=>toggleOrderItem(order_id, e.id)} 
                        className={`kitchen-todo__item ${e.isDone ? "kitchen-todo__item--done": ""}`}>
                        <div className="kitchen-todo__item-name">
                            {e.name}
                        </div>
                        <div className="kitchen-todo__item-attr">
                            <div className="kitchen-todo__item-attr--num">
                                x{e.count}
                            </div>
                            <div className="kitchen-todo__items-attr--status">
                                {e.isDone?'v': 'x'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="kitchen-todo__action">
                <button className="kitchen-todo__action-btn kitchen-todo__action-btn--delete" onClick={()=>deleteTodo(order_id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="kitchen-todo__action-btn kitchen-todo__action-btn--primary">
                    Finish
                </button>
            </div>
        </div>
    );
}
 
export default KitchenTodo;