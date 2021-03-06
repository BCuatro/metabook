import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';
import HomePageContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import Profile from './profile/profile';
import NavBarContainer from './nav_bar/nav_bar_container';



const App = () => (
    
    <div>
        <Modal/>
       
        <header>
            <h1 className="logo">Basicbook</h1>
            <NavBarContainer />
        </header>
                
            
            <Switch>

                <ProtectedRoute path= "/users/:userId" component={ProfileContainer}/>
                <Route exact path="/" component ={HomePageContainer} />
            </Switch>
         
    </div>
)

export default App;
