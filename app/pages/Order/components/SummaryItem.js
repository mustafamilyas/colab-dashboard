import React, { Component } from 'react';
import { formatMoney } from "../../../utils/format";

class SummaryItem extends Component {
    render() { 
        let {img, name, count, price} = this.props;
        return (
            <div className='order-item'>
                <div className='order-item__img-wrapper'>
                    <img src={img} alt={name}/>
                </div>
                <div className='order-item__content'>
                    <div className='order-item__content--left'>
                        <div className='order-item__name'>
                            {name}
                        </div>
                        <div className='order-item__count'>
                            {count}x
                        </div>
                    </div>
                    <div className='order-item__content--right'>
                        { formatMoney(count * price) }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SummaryItem;