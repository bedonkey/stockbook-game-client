import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import './index.css';

class UserPicture extends Component {

    constructor() {
        super();
        document.title = '2018 Bạn đầu tư thế nào?';
        this.state = {
            player: localStorage.getItem('player') ? localStorage.getItem('player') : null,
            userid: localStorage.getItem('userid') ? localStorage.getItem('userid') : null
        }
    }

    componentDidMount() {
        console.log(this.state.player)
        console.log(this.props.params.user)
        if (!this.state.player || !this.props.params.user || (this.state.userid != this.props.params.user)) {
            browserHistory.push('/');
        }
    }

    render(){
        if (!this.state.player || !this.props.params.user) {
            return null;
        }
        let imgUrl = 'http://localhost:3333/images/results/' + this.props.params.user + '.jpg';
        return(
            <div>
                <h1>Nhấp vào để xem năm này bạn thành công đến mức nào nhé!</h1>
                <h2>Kết quả đầu tư của {this.state.player}</h2>  
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