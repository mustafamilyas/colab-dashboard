import React, { Component } from 'react';
import { formatMoney } from "../../../utils/format";

class ProductItem extends Component {
    handleInput = (e) => {
        console.log(e.target.value)
    }

    render() { 
        const {name, price, count, img} = this.props;

        return (
            <div className='product-item' onClick={this.props.onClick}>
                <div className='product-item__img-wrapper'>
                    <img className='product-item__img' src={img} alt={"Picture of " + name}/>
                </div>
                <div className='product-item__desc'>
                    <div className='product-item__name'>{name}</div>
                    <div className='product-item__price'>{formatMoney(price)}</div>
                </div>
                <div className='product-item__counter'>
                    <input className='product-item__counter-input' type='number' min='0' value={count} onChange={this.handleInput}/>
                </div>
                &nbsp;
            </div>
        );
    }
}
 
export default ProductItem;