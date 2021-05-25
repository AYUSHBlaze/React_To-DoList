import React from 'react';
import logo from '../images/logo.PNG';

function User(){
    return(
        <div className="User">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="info">
                <p>Ayush Singh</p>
                <a href="#">Logout!</a>
            </div>
        </div>
    )
}

export default User