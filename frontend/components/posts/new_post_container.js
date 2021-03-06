import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { login, removeLoginErrors, removeSignupErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createPost, removeErrors } from '../../actions/posts_actions';
import NewPost from './new_post';
// import SessionForm from './session_form';



const mapStateToProps= (state, ownProps) =>{
    return{

        currentUser:state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        userId: ownProps.match.params.userId,
        errors: state.errors.posts


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        createPost: (formData) => dispatch(createPost(formData)),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal())
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost))