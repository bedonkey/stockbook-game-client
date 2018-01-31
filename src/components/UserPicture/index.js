import React, { Component } from 'react';
import './index.css';

class UserPicture extends Component {

    constructor() {
        super();
        this.state = {
            player: localStorage.getItem('player') ? localStorage.getItem('player') : null
        }
    }

    render(){
        if (!this.state.player || !this.props.params.user) {
            return null;
        }
        let imgUrl = 'http://localhost:3333/images/results/' + this.props.params.user + '.jpg';
        return(
            <div>
                <h2>Kết quả đàu tư của {this.state.player}</h2>  
                <div className="result">
                    <img src={imgUrl} />
                </div>
                <div className="share">
                    <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href}>
                        Share
                    </a>
                </div>
            </div>
        )
    }
}

export default UserPicture;