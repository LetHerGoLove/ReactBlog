import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { counter, Provider, connect } from 'react-redux';
import * as bs from 'react-bootstrap';

/*js*/


/*css*/
import '../css/headerFrames';

export class SiteMain1 extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div class="slider">
                <ul class="clearfix">
                    <li><a href="#bg1">Hipster Fashion Haircut </a></li>
                    <li><a href="#bg2">Cloud Computing Services &amp; Consulting</a></li>
                    <li><a href="#bg3">My haire is sooo fantastic!</a></li>
                    <li><a href="#bg4">Eat healthy &amp; excersice!</a></li>
                    <li><a href="#bg5">Lips so kissable I could die ...</a></li>
                </ul>
            </div>

        )
    }
}
export class SiteMain1Img extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div className="site-imgs">
                <img src="react/images/bg0.jpg" alt="" class="bg slideLeft" id="bg1" />
                <img src="react/images/bg1.jpg" alt="" class="bg slideBottom" id="bg2" />
                <img src="react/images/bg2.jpg" alt="" class="bg zoomIn" id="bg3" />
                <img src="react/images/bg1.jpg" alt="" class="bg zoomOut" id="bg4" />
                <img src="react/images/bg0.jpg" alt="" class="bg rotate" id="bg5" />
            </div>
        )
    }
}


