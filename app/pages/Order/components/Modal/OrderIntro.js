import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal, changeName, changeTableNumber } from "../../actions/order";
import Modal from '../../../../components/Modal';

class OrderIntro extends Component {
    state = {
        name: '',
        table: ''
    }

    handleSubmit = () => {
        let name = this.state.name.trim();
        let table = this.state.table.trim();
        this.setState({
            name, table
        })
        if(this.state.name && this.state.table) {
            this.props.changeName(name);
            this.props.changeTableNumber(table);
            this.props.toggleModal({modalState: 0, isModalShow: false})
        }
    }

    handleNameInput = (e) => {
        this.setState({ name: e.target.value })
    }
    
    handleTableInput = (e) => {
        this.setState({ table: e.target.value })
    }

    render() { 
        return (
            <Modal>
                <div className='popup-order order-intro'>
                    <label className='order-intro__input'>
                        Your Name
                        <input type='text' placeholder='John Doe' onChange={this.handleNameInput}/>
                    </label>
                    <label className='order-intro__input'>
                        Table Number
                        <input type='text' placeholder='C20' onChange={this.handleTableInput}/>
                    </label>
                    <button className='order-intro__btn' onClick={this.handleSubmit}>
                        Submit
                    </button>
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
      toggleModal: payload => dispatch(toggleModal(payload)),
      changeTableNumber: payload => dispatch(changeTableNumber(payload)),
      changeName: payload => dispatch(changeName(payload)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderIntro);
