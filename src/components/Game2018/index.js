import React, { Component } from 'react';
import './index.css';

//Components
import FacebookLogin from '../FacebookLogin/'

class Game2018 extends Component {
    
    render(){
        return(
            <div>
                <h2>Năm 2018 bạn đầu tư thế nào?</h2>   
                <FacebookLogin />
                <p>Đã đến lúc tìm hiểu xem 2018 bạn có thành công hơn 2017 hay không?</p>
            </div>
        )
    }
}

export default Game2018;