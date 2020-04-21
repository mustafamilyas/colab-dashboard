import React, {useContext} from 'react';
import { KitchenContext } from '../../../contexts/KitchenContext';

const KitchenQueue = (props) => {
    const {addTodo, deleteQueue} = useContext(KitchenContext);
    const {order_id, name, table} = props.queue;

    return (
    <div className='kitchen-queue'>
        <div className="kitchen-queue__number">#{order_id}</div>
        <div className="kitchen-queue__content">
            <div>
                {name}
            </div>
            <div>
                {table}
            </div>
        </div>

        <div className="kitchen-queue__action">
            <div className="kitchen-queue__action-btn kitchen-queue__action-btn--danger" onClick={()=>deleteQueue(order_id)}>
                <i className="fas fa-trash-alt"></i>
            </div>
            <div className="kitchen-queue__action-btn kitchen-queue__action-btn--primary" onClick={()=>addTodo(order_id)}>
                Process
            </div>
        </div>
    </div>
    );
}
 
export default KitchenQueue;