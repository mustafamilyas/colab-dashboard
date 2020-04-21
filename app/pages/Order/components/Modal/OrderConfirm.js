import React, { Component } from 'react';
import { connect } from "react-redux";
import Modal from '../../../../components/Modal';
import SummaryItem from '../SummaryItem';
import { toggleModal, submitOrder, emptyOrder, changeSuccessOrder } from "../../actions/order";

class OrderConfirm extends Component {
    handleSubmit = async () =>{
        let payload = {
            name: this.props.name,
            table: this.props.table,
            orders: this.props.orders
        }
        const response = await submitOrder(payload);
        this.props.changeSuccessOrder(response);
        this.props.toggleModal({modalState: 2, isModalShow: true});
        this.props.emptyOrder();
    }

    handleClose = () =>{
        this.props.toggleModal({modalState: 1, isModalShow: false});
    }

    render() { 
        return (
            <Modal>
                <div className='popup-order order-confirm'>
                    <div className='order-confirm__title'>
                        Order Summary
                    </div>
                    <div className='order-confirm__consument'>
                        <div>
                            <div className='bold'>Your Name</div>
                            <div>{this.props.name}</div>
                        </div>
                        <div>
                            <div className='bold'>Table Number</div>
                            <div>{this.props.table}</div>
                        </div>
                    </div>
                    <div className='order-confirm__summary'>
                        {this.props.orders.length > 0 ? this.props.orders.map(item => (
                            <SummaryItem 
                                key={item.order}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                count={item.count}
                                price={item.price}
                            />
                        )) : 'You have no order'}
                    </div>
                    <div className='order-confirm__btn-group'>
                        <button className='order-confirm__btn order-confirm__btn--invert' onClick={this.handleClose}>
                            Cancel
                        </button>
                        <button className='order-confirm__btn order-confirm__btn--primary' onClick={this.handleSubmit}>
                            Submit My Order
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      toggleModal: modalState => dispatch(toggleModal(modalState)),
      changeSuccessOrder: order => dispatch(changeSuccessOrder(order)),
      emptyOrder: modalState => dispatch(emptyOrder(modalState))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);
