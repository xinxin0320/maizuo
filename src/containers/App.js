import React, { Component } from 'react';
import Header from '../components/commen/Header';
import Sidebar from '../components/commen/Sidebar';

import {Switch,Route} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/common';


import Home from './Home';
import Film from './Film';
import Detail from './Detail';
import Cinema from './Cinema';
import Card from './Card';
import User from './User';
import City from './City';
import Shop from './Shop';
// 公共css
import "../styles/reset.css";
import "../styles/icon.css";

class App extends Component {
  render() {
    return (
     <div>
         <Header
             toggleNav = {this.props.toggleNav}
             showNav={this.props.common.showNav }
         />
         {this.props.common.showNav ?  <Sidebar toggleNav={this.props.toggleNav} showNav={this.props.common.showNav} /> : null}


         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/film" component={Film}/>         //影片
             <Route path="/detail/:id" component={Detail}/> //详情
             <Route path="/cinema" component={Cinema}/>     //电影院
             <Route path="/shop" component={Shop}/>     //商城
             <Route path="/card" component={Card}/>   //卖座卡
             <Route path="/user" component={User}/>//成员
             <Route path="/city" component={City}/>//城市
             <Route render={()=><h3>走丢啦~</h3>}/>

         </Switch>


     </div>
    );
  }
}

function mapStateToProps(state){
    return {
        common : state.common,
        home : state.home
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
