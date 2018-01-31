import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import axios from 'axios';

//Assets
const config = {
    facebook: '301444123563736'
};

class FacebookLogin extends Component{
    
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : config.facebook,
              cookie     : true,  // enable cookies to allow the server to access the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.8' // use version 2.1
            });
        };
    }
    
    facebookLogin = () => {
        // window.FB.login(
        //     this.checkLoginState(), 
        //     { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
        // );
        
        window.FB.login(
            function(resp){
                this.statusChangeCallback(resp);
            }.bind(this),{ scope : 'email, public_profile' });
    }
    
    checkLoginState() {
        window.FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }
    
    statusChangeCallback(response) {
        if (response.status === 'connected') {
            this.fetchDataFacebook();
        } else if (response.status === 'not_authorized') {
            console.log('Import error', 'Authorize app to import data', 'error')
        } else {
            console.log('Import error', 'Error occured while importing data', 'error')
        }
    }
    
    fetchDataFacebook = () => {
        window.FB.api('/me', function(user) {
            axios({
                method: 'POST',
                url: 'http://localhost:3333/generate',
                credentials : 'same-origin',
                data: {
                    userid: user.id,
                    name: user.name
                }
            })
            .then(function (response) {
                localStorage.setItem('player', user.name)
                browserHistory.push('/user/' + user.id);
            })
            .catch(function (error) {
                console.log(error);
            })
            
        });
    }

    render(){
        return(
            <div className="login-btn" onClick={ () => this.facebookLogin() }>
                Đăng nhập FB
            </div>
        )
    }
}

export default FacebookLogin;
