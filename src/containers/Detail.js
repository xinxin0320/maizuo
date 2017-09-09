import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/detail';
import '../styles/detail.css';

class Detail extends Component {
    componentWillMount(){
        let id = this.props.match.params.id;
        this.props.getFilm(id);
    }
  render() {
      console.log(this.props.detail);
    return (
        <div className="detail">
		   <img src={this.props.detail.cover && this.props.detail.cover.origin} />
           <h2>影片简介</h2>
           <ul>
               <li>导演：{this.props.detail.director}</li>
               <li>主演：{this.props.detail.actors && this.props.detail.actors.map(item => item.name)} </li>
               <li>地区语言：{this.props.detail.nation} {this.props.detail.language}
               </li>
               <li> 类型： {this.props.detail.category} </li>
               <li> 上映日期：{this.props.detail.category}</li>
           </ul>
           <p>{this.props.detail.synopsis}</p>
           <button>立即购票</button>
          </div>
    );
  }
}
function mapStateToProps(state){
    return{
        detail:state.detail
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail) ;
