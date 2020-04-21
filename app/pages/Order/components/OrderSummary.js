import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../actions/order";
import { formatMoney } from "../../../utils/format";
import OrderItem from './OrderItem';

class OrderSummary extends Component {

    calculateSubTotal = () => {
        let subtotal = 0;
        this.props.orders.map(order => {
            subtotal += order.price * order.count
            return order;
        })
        return subtotal;
    }
    handleOrder = () => {
        this.props.toggleModal({modalState: 1, isModalShow: true})
    }

    render() {
        const orderItem = this.props.orders.length > 0 ? this.props.orders.map(item => (
            <OrderItem 
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                count={item.count}
                price={item.price}
            />
        )) : 'You have no order';
        return (
            <div className='order-summary'>
                <div className='order-summary__heading'>
                    <h3>Your Order</h3>
                    <p>{new Date().toDateString()}</p>
                </div>
                <div className='order-summary__items'>
                    {orderItem}
                </div>
                <div className='order-summary__content'>
                    <div className='row-space-between'>
                        <div>
                            Subtotal
                        </div>
                        <div>
                            {formatMoney(this.calculateSubTotal())}
                        </div>
                    </div>
                    <div className='row-space-between'>
                        <div>
                            Tax
                        </div>
                        <div>
                            {formatMoney(this.calculateSubTotal() / 10)}
                        </div>
                    </div>
                    <div className='order-summary__total row-space-between bold'>
                        <div>
                            Total
                        </div>
                        <div>
                            {formatMoney(this.calculateSubTotal() + this.calculateSubTotal() / 10)}
                        </div>
                    </div>
                    <div className='order-summary__btn' onClick={this.handleOrder}>
                        Order
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      toggleModal: modalState => dispatch(toggleModal(modalState))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);