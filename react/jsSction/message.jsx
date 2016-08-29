import React, {Component, PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import { applyMiddleware,createStore,combineReducers,bindActionCreators } from 'redux'; 
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import ajax from './ajax5.js';
import { counter } from 'react-redux';
import * as bs from 'react-bootstrap';
import '../css/bootstrap';


export class Forms extends Component{
    constructor(props){
        super(props);
        //初始
        this.state = {
            isLoading:false,
            require_state:'',
            require_msg:[],
            off:true
        }
    }
    handleClick() {
        this.setState({isLoading: true});
        this.timer = setTimeout(() => {
        this.setState({isLoading: false});
        this.ajaxIn();
        }, 1000);
    }   
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.NickName).focus();
        this.getCurrentMessage();
          
    }
    getCurrentMessage(){
      ajax({  
              type : "post",    
              url : "ajax.php",  
              data : {}, 
              success : (str) => {  
                  // console.log('1',typeof str);
                  let dataAjax = JSON.parse(str);
                  let error = parseInt(dataAjax.error);
                  let initDataArr=dataAjax.msg;
                  this.setState({
                      require_state:error,
                      require_msg:initDataArr
                  });
              }  
      });

    }
    findDomNodes(componentName) {
      return ReactDOM.findDOMNode(this.refs[componentName]);
    }
    selectMessage(){

    }
    ajaxIn(){
       // console.log(ReactDOM.findDOMNode(this.refs.contcatEmail).value);
       console.log(this.findDomNodes('contcatEmail').value);
          ajax({  
                  type : "post",   
                  url : "mysql.php",  
                  data : {  
                      NickName : this.findDomNodes('NickName').value,
                      LeaveMessage:this.findDomNodes('LeaveMessage').value,
                      contcatEmail:this.findDomNodes('contcatEmail').value
                  }, 
                  success : (result) => { 
                        this.getCurrentMessage();
                  }  
              });  
      }
    render(){
        let isLoading = this.state.isLoading;
        var Item = this.state.require_msg.map(function( item,index ){
            return <Msg data={item} key={index}/>
            //{NickName}
        });
        return(
            <div>
                  
                    <bs.FormGroup controlId="formValidationSuccess3" validationState="success">
                      <bs.ControlLabel>NickName:</bs.ControlLabel>
                      <bs.FormControl type="text"  ref="NickName" name="NickName"/>
                      <bs.FormControl.Feedback>
                        <bs.Glyphicon glyph="music" />
                      </bs.FormControl.Feedback>
                    </bs.FormGroup>

                    <bs.FormGroup controlId="formControlsTextarea">

                      <bs.ControlLabel>LeaveMessage:</bs.ControlLabel>
                      <bs.FormControl componentClass="textarea" placeholder="textarea"  ref="LeaveMessage" name="LeaveMessage"/>
                    </bs.FormGroup>

                    <bs.Form componentClass="fieldset" horizontal>
                      <bs.FormGroup controlId="formValidationSuccess4" validationState="success">
                        <bs.Col componentClass={bs.ControlLabel} xs={3}>
                          Email:
                        </bs.Col>
                        <bs.Col xs={9}>
                          <bs.InputGroup>
                            <bs.InputGroup.Addon>@</bs.InputGroup.Addon>
                            <bs.FormControl type="text" ref="contcatEmail" onChange={function(){console.log(this.refs)}.bind(this)} name="contcatEmail"/>
                          </bs.InputGroup>
                          <bs.FormControl.Feedback />
                        </bs.Col>
                      </bs.FormGroup>
                    </bs.Form>
                    <div className="text-right">
                          <bs.Button
                            bsStyle="primary"
                            disabled={isLoading}
                            onClick={!isLoading ? this.handleClick.bind(this) : null}>
                            {isLoading ? 'Please wait...' : 'You can leave a message'}
                          </bs.Button>
                      </div>
                      { (this.state.require_state == 0)?Item:null }
            </div>
        );

        
    }
}

class Msg extends React.Component{
    constructor(props){
        super(props);
        //初始
        this.state = {

        }
    }  
    render(){
      console.log(this.props.data)
      return(
          <bs.Media>
           <bs.Media.Left>
              
            </bs.Media.Left>
            <bs.Media.Body>
            <bs.Media.Heading>{this.props.data.NickName}<small><span style={{fontSize:'12px'}} className="text-success pull-right">{this.props.data.L_Time}</span></small></bs.Media.Heading>
              <p className="MessageFont">{this.props.data.L_MessageCon}</p>
            </bs.Media.Body>
          </bs.Media>
      )
    }
}
// render(
//   <Forms/>,
//   document.getElementById('demo')
// );


// { (this.state.require_state == 0)?Item:null }


        // var Item = this.state.require_msg.map(function( item,index ){
        //     return <Msg data={item} key={index}/>
        //     //{NickName}
        // });

