import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../../actions/order";

class Modal extends Component {
    handleClose = () => {
        if(this.props.modalState === 0) return;
        this.props.toggleModal(false)
    }

    render() {
        // const IS_ACTIVE = this.props.active;
        const IS_ACTIVE = this.props.isModalShow;

        return (
            <div className={`modal ${IS_ACTIVE ? '' : 'disable'}`}>
                <div className='modal__background'  onClick={this.handleClose}>
                    &nbsp;
                </div>
                <div className='modal__content'>
                    { this.props.children }
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
      toggleModal: modalState => dispatch(toggleModal(modalState)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
