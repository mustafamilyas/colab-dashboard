import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../actions/order";
import OrderSummary from './components/OrderSummary';
import ProductList from './components/ProductList';
import OrderIntro from './components/Modal/OrderIntro';
import OrderConfirm from './components/Modal/OrderConfirm';
import OrderSuccess from './components/Modal/OrderSuccess';
import {getMenu} from '../../api/order';

class Order extends Component {
    componentWillMount() {
        let menu = getMenu();
        console.log('test', menu);
    }

    render() {
        let { modalState } = this.props; 
        const modal = [
            <OrderIntro/>,
            <OrderConfirm/>,
            <OrderSuccess/>
        ]

        return (
            <div className='order'>
                <div className='order-content'>
                    <header className='order-header'>
                        <h1 className='order__heading'>Welcome to Colab</h1>
                        <input type='text' className='order__input--search' placeholder='Search your favorite food'/>
                    </header>
                    <div className='order-suggestion'>
                        <div className='order-suggestion__item'>Drink</div>
                        <div className='order-suggestion__item'>Food</div>
                        <div className='order-suggestion__item'>Dessert</div>
                    </div>
                    <ProductList
                        title="Our Best Selling Product"
                    />
                    <ProductList
                        title="Our Recommendation"
                    />
                    <ProductList
                        title="Friday Payday"
                    />
                </div>
                <OrderSummary />
                { modal[modalState] }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      toggleModal: modalState => dispatch(toggleModal(modalState)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Order);