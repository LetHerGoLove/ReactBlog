import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { counter, Provider, connect } from 'react-redux';
import * as bs from 'react-bootstrap';

/*css*/
import '../css/reset';
import '../css/style';
import '../css/style-responsive';
import '../css/setCompents';
import '../css/picAni3d';
// import '../css/Slider/demo';
import '../css/Slider/style2';
import '../css/TimeAxis';
import {Forms} from './message.jsx';

import '../css/pageCss/xt';
import '../css/pageCss/demo_styles';
import '../css/pageCss/demo1';

/*js*/




export class SlideShow extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <ul className="cb-slideshow sliderLI">
        <li><span>Image 01</span><div><h3>ECMAScript5</h3></div></li>
        <li><span>Image 02</span><div><h3>ECMAScript6</h3></div></li>
        <li><span>Image 03</span><div><h3>JS运动</h3></div></li>
        <li><span>Image 04</span><div><h3>H5+CSS3</h3></div></li>
        <li><span>Image 05</span><div><h3>数据交互：PHP</h3></div></li>
        <li><span>Image 06</span><div><h3>ES6+React+WebPack</h3></div></li>
      </ul>
    )
  }
}


export class SiteMain extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <section className="start-page parallax-background" id="home">
        <div className="opacity"></div>
        <div className="content">
          <div className="text">

            <h1>谢朋的个人站</h1><hr/>
            <p>Peter留下一点小心思...未完待续</p>
            <a href="#about-us"><div className="read-more">Read more</div></a>
          </div>
          <div className="arrow-down"></div>
        </div>
      </section>
    )
  }
}

export class Menu_Mobile extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div className="SiteMenuMobile">
        <section className="menu-media">
          <div className="menu-content">
            <div className="logo">Onepage</div>
            <div className="icon"><a href="#"><img src="react/images/icons/menu-media.png"/></a></div>
          </div>
        </section>
        <ul className="menu-click">
          <a href="#home"><li href="#home">HOME</li></a>
          <a href="#about-us"><li href="#about-us">关于我</li></a>
          <a href="#portfolio"><li href="#portfolio">技术历程</li></a>
          <a href="#contact"><li href="#contact">对我有意</li></a>
        </ul>
      </div>
    )
  }
}

export class Menu_PC extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <section className="menu"> 
        <div className="menu-content">
          <div className="logo">Onepage</div>
          <ul id="menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about-us">ABOUT ME</a></li>
            <li><a href="#portfolio">JOURNEY</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </section>
    )
  }
}

export class AboutUs extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
      <section className="about-us" id="about-us">
        <div className="content">
          <h1>ABOUT US</h1>
          <hr/>
          <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
          <div className="column-one">
            <div className="circle-one"></div>
            <h2>RESPONSIVE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="column-two">
            <div className="circle-two"></div>
            <h2>MINIMALIST</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="column-three">
            <div className="circle-three"></div>
            <h2>FREEBIES</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          </div>
        </div>
        
      </section>
      <TimeAxis/>
      </div>
    )
  }
}

export class Portoflio extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <section className="portfolio" id="portfolio">
        <div className="portfolio-margin">
          <h1>PORTFOLIO</h1>
          <hr />
          <ul className="grid">

            <li> <a href="#"> <img src="react/images/portfolio/1.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 1</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/6.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 6</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/7.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 7</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/8.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 8</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/9.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 9</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/10.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 11</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>

            <li> <a href="#"> <img src="react/images/portfolio/11.png" alt="Portfolio item" />
              <div className="text">
                <p>PORTFOLIO 11</p>
                <p className="description">Your text here...</p>
              </div> </a> </li>
          </ul>
          <a href="#">
            <div className="read-more">
              Read more
            </div></a>
        </div>
      </section>
    )
  }
}
export class Portoflio1 extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <section className="portfolio" id="portfolio">
        <div className="portfolio-margin">
          <h1>Journey Of The Heart</h1>
          <hr />
          <PageAnim/>
        </div>
      </section>
    )
  }
}
export class Order extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <section className="partners parallax-background-partners" id="partners">
        <div className="opacity"></div>
        <div className="content">
          <h2>留言处</h2>
          <Forms/>
        </div>
      </section>
    )
  }
}

export class Contact extends Component {
  constructor(props){
    super(props);
    //初始
    this.state = {
        isLoading:false,
        names:this.props.Namevalue,
        em:this.props.Emailvalue
        
    }

  }
  fnHandle(){
      this.setState({mes:ev.target.value});
  }
  render() {
    const {value, onIncreaseClick } = this.props;
    return (
      <section className="contact" id="contact">
        <h1>Contact</h1>
        <hr />
        <div className="content">
          <div className="form">
            <form method="post" action="mysql.php" name="kontakt">
              <div className="column">
                YOUR NAME
                <br />
                <br />
                <input  type="text"  ref="NickName" name="NickName" id="name" />
              </div>
              <div className="column-2">
                YOUR E-MAIL
                <br />
                <br />
                <input type="text" ref="contcatEmail" name="contcatEmail" id="email"  />
              </div>
              <div className="column-3">
                MESSAGE
                <br />
                <br />
                <textarea id="message" name="LeaveMessage"></textarea>
              </div>
              <div className="button">
                <span><input className="submit" id="submit" name="submit" type="submit" value="SEND" /></span>
              </div>
            </form>
          </div>
          <div className="contact-text">
            To contact us please use the contact form visible
            <br />
            <br /> When sending files, please use
            <br /> the following e-mail
            <br />
            <br />
            <strong>Tomasz Mazurczak</strong>
            <br />
            <br /> e-mail:
            <strong>contact @thomsoon.com</strong>
          </div>
        </div>
      </section>
    )
  }
}

export class Footer extends Component {
  render() {
    const {value, onIncreaseClick } = this.props;
    return (
      <section className="footer">

        <div className="menu-footer">
          <a href="#home">Peter</a>
        </div>
      </section>
    )

  }
}


export class TimeAxis extends Component {
  render() {
    const {value, onIncreaseClick } = this.props;
    return (
        <section className="main"> 
        <ul className="timeline"> 
          <li className="event"> <input type="radio" name="tl-group" checked="" /> <label></label> 
          <div className="thumb user-4">
            <span>February 2, 2016</span>
          </div> 
          <div className="content-perspective"> 
            <div className="content"> 
            <div className="content-inner"> 
              <h3>本科毕业</h3> 
              <p>谢朋，男，23岁。2014年毕业于浙江大学艺术系。因机缘巧合进入了IT行业，遂一直进行着Java开发。</p> 
            </div> 
            </div> 
          </div> </li> 
          <li className="event"> <input type="radio" name="tl-group" /> <label></label> 
          <div className="thumb user-6">
            <span>February 2, 2016</span>
          </div> 
          <div className="content-perspective"> 
            <div className="content"> 
            <div className="content-inner"> 
              <h3>天性使然</h3> 
              <p>2016年2月离职。许是天性使然，我喜欢一切美的事物，例如摄影、写作、写生。长期的Java后台工作致使我与Oracle/DB2、Linux接触良多，我从中得到了很多乐趣，但总觉着之中缺乏了什么。我喜欢IT这行，我又喜欢让人怦然心动的灵感。我知道，我累了，攒了些钱去了大理。从未独自去过那么远地方的孩纸很快就被那里的风景，那里的妹纸深深吸引。于是我忽然发觉，我更喜欢的是未知的未来。朋友说，前端就是IT里最为未知的未来，有无限可能。于是，我来了。</p> 
            </div> 
            </div> 
          </div> </li> 
          <li className="event"> <input type="radio" name="tl-group" /> <label></label> 
          <div className="thumb user-3">
            <span>17 Nov</span>
          </div> 
          <div className="content-perspective"> 
            <div className="content"> 
            <div className="content-inner"> 
              <h3>My brains are going into my feet! </h3> 
              <p>We're done with you. Go back to the golf course and work on your putz. Nah, he got the upside, I got the downside. See there's two sides to every Schwartz. What's the matter with this thing, what's all that churnning and bubbling, you call that radar screen? Ah, planet Druidia. And under that air shield, ten thousand years of fresh air. We must get through that air shield! Say goodbye to your two best friends, and I don't mean your pals in the Winnebago. So, Lone Star, now you see that evil will always triumph because good is dumb. </p> 
            </div> 
            </div> 
          </div> </li> 
          <li className="event"> <input type="radio" name="tl-group" /> <label></label> 
          <div className="thumb user-5">
            <span>16 Nov</span>
          </div> 
          <div className="content-perspective"> 
            <div className="content"> 
            <div className="content-inner"> 
              <h3>Would you please stop calling me that?</h3> 
              <p>You make it so difficult sometimes. You have your moments. Not many of them, but you do have them. You're not actually going IN to an asteroid field? I happen to like nice men. This bucket of bolts's never gonna get us past that blockade. We're going to get pulverized if we stay out here much longer. Evacuate remaining ground staff.</p> 
            </div> 
            </div> 
          </div> </li> 
        </ul> 
        </section>

    )

  }
}

export class PageAnim extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      
  <div className="col-sm-12 dm-demo1"> 
   <div className="htmleaf-container text-center clearfix"> 
    <nav className="nav clearfix text-center"> 
     <button className="nav-el el-topleft" data-id="ov-topleft"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-education"></span></a></button> 
     <button className="nav-el el-topright" data-id="ov-topright"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-phone-alt"></span></a></button> 
     <button className="nav-el el-btmleft" data-id="ov-btmleft"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-heart-empty"></span></a></button> 
     <button className="nav-el el-btmright" data-id="ov-btmright"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-zoom-in"></span></a></button> 
     <button className="nav-el el-topleft" data-id="ov-topleft1"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-music"></span></a></button> 
     <button className="nav-el el-topright" data-id="ov-topright1"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-user"></span></a></button> 
     <button className="nav-el el-topright" data-id="ov-topright1"><a className="bb" href="javascript:;"> <span className="glyphicon glyphicon-user"></span></a></button> 
    </nav> 
    <section className="overlay" id="ov-topleft"> 
     <div className="wrap"> 
      <h1>Section 1</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
    <section className="overlay" id="ov-topright"> 
     <div className="wrap"> 
      <h1>Section 2</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
    <section className="overlay" id="ov-btmleft"> 
     <div className="wrap"> 
      <h1>Section 3</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
    <section className="overlay" id="ov-btmright"> 
     <div className="wrap"> 
      <h1>Section 4</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
    <section className="overlay" id="ov-topleft1"> 
     <div className="wrap"> 
      <h1>Section 5</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
    <section className="overlay" id="ov-topright1"> 
     <div className="wrap"> 
      <h1>Section 6</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
     </div> 
     <button className="close"><span className="glyphicon glyphicon-remove"></span></button> 
    </section> 
   </div> 
  </div>

    )
  }
}



class Pic extends Component{
    constructor(props){
        super(props);
        //初始
        this.state = {

        }
    }  
    render(){
      return(
          <li></li>
      )
    }
}
export class PicAni3d extends Component { 
  constructor(props){
        super(props);
        //初始
        this.state = {
          picList:this.props
          
        }
        this.picList=[
          {url:'../images/img3/1.jpg'},
          {url:'../images/img3/2.jpg'},
          {url:'../images/img3/3.jpg'},
          {url:'../images/img3/4.jpg'},
          {url:'../images/img3/5.jpg'},
          {url:'../images/img3/6.jpg'},
          {url:'../images/img3/7.jpg'},
          {url:'../images/img3/8.jpg'},
          {url:'../images/img3/9.jpg'},
          {url:'../images/img3/10.jpg'},
          {url:'../images/img3/11.jpg'}
        ]
  }
  render() {
    const {value, onIncreaseClick } = this.props;

    var Item = this.picList.map(function( item,index ){
    return <Pic data={item} key={index}/>
    //{NickName}
    });
    return (
      <div className="Pic3D">
       <ul className="pic3DAni">{Item}</ul>
      </div>
    )

  }
}

export class PIC extends Component { 
  constructor(props){
        super(props);
        //初始
        this.state = {
          // picList:this.props.picList
        }
  }
  render() {
    const {value, onIncreaseClick } = this.props;
    return (
      <div className="Pic3D">
       <ul className="pic3DAni"></ul>
      </div>
    )

  }
}