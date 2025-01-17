import React, { Component } from 'react';
import './AlreadySubscribe.css';

class AlreadySubscribe extends Component {
    goPremium() {
        this.props.history.push('/get-premium')
    }
    render() {
        return (
            <div className="body ">
            <div className="subscribe-body">
             <div className="p-3 subscribe-container ">
                <div className="container text-center"> 
                    <strong className="subscribed">You are already Subscribed</strong>   
                    <div><button className="back-button my-3 " onClick={this.goPremium.bind(this)}><i className="fas fa-arrow-left mx-3"></i>Back</button></div>
                </div>
                </div>
             </div>
            </div>

        )}

}

export default AlreadySubscribe;