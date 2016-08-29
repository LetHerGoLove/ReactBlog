import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { counter, Provider, connect } from 'react-redux';
import * as bs from 'react-bootstrap';
import * as Com from '../jsSction/components.jsx';
// import * as Slider from '../jsSction/SliderTop.jsx';
/*js*/
import {PageJS} from '../jsSction/pageJs/demoPage';
import {Pic3DAni} from '../jsSction/picAni3d';
// import {Forms} from '../jsSction/message.jsx';

/*css*/ 

import '../css/setCompents';


// React component
class Counter extends Component {
    constructor(props){
      super(props);
      //初始
      this.state = {
          isLoading:false,
          require_state:'',
          require_msg:[],
          off:true
      }
      this.obj={
        // type: 'text',
        Namevalue: 'DD',
        Emailvalue:'for_moving@163.com'
      }
      this.selectMessage();
  }
  selectMessage(){
      console.log('selectMessage');
      let oO = new PageJS();
      oO.SH();

  }
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div className="SiteMain">
        <Com.SlideShow/>
        <Com.SiteMain/>
        <Com.Menu_Mobile/>
        <Com.Menu_PC/>
        
        <div className="clear"></div>
        
        <Com.Portoflio1/>
        <div className="clear"></div>
        <Com.Order/>
        <Com.Contact {...this.obj}/>
        <Com.Footer/>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter1(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter1)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)