import React, { useContext } from 'react';
import KitchenQueue from './components/KitchenQueue';
import KitchenTodo from './components/KitchenTodo';
import { KitchenContext } from '../../contexts/KitchenContext';
import { EmptyLayout } from './../../components';
import './../../assets/scss/pages/_kitchen.scss';

const Kitchen = () => {
    const {queue, todo} = useContext(KitchenContext);
    console.log(queue, todo);
    return (
        <EmptyLayout>
            <EmptyLayout.Section center className="kitchen">
                {/* <div className="kitchen"> */}
                    <div className="kitchen__todo">
                        <h2>Process Queue ({todo.length}/{todo.length+queue.length})</h2>
                        <div className="kitchen__list kitchen__list--process">
                            {todo.length > 0 ? todo.map(e=><KitchenTodo todo={e} key={e.order_id}/>) : ''}
                        </div>
                    </div>

                    <div className="kitchen__queue">
                        <h2>Order Queue</h2>
                        <div className="kitchen__list kitchen__list--order">
                            {queue.length > 0 ? queue.map(e=><KitchenQueue queue={e} key={e.order_id}/>) : ''}
                        </div>
                    </div>
                {/* </div> */}
            </EmptyLayout.Section>
        </EmptyLayout>
    );
}
 
export default Kitchen;