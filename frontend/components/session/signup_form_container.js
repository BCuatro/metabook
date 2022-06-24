import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, removeSignupErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';




const mapStateToProps= (state) => {
    console.log(state)
    // debugger
    return{

        signupErrors: state.errors.signupErrorSession,
        formtype: "Sign Up"

    }
}

const mapDispatchToProps= dispatch => {
    return{
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeSignupErrors()),
      
        closeModal: () => dispatch(closeModal())
        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)