import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/home';




import Carousel from '../components/home/Carousel';
import ComingSoon from '../components/home/ComingSoon';
import NowPlaying from '../components/home/NowPlaying';

class Home extends Component {
  render() {
    return (
     <div>
         <Carousel billboards={this.props.billboards} getBillboard={this.props.getBillboard}/>
         <NowPlaying nowPlayings={this.props.nowPlayings} getNowPlaying={this.props.getNowPlaying}/>
         <ComingSoon comingSoons={this.props.comingSoons} getComingSoon={this.props.getComingSoon}/>


     </div>
    );
  }
}
function mapStateToProps(state){
    return {
        billboards : state.home.billboards,
        nowPlayings : state.home.nowPlayings,
        comingSoons : state.home.comingSoons
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
