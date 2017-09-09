import React, { Component } from 'react';
import '../../styles/film.css';
import FilmItem from './FilmItem';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});

export default class NowPlaying extends Component {
    componentWillMount(){
        this.props.getNowPlaying();
    }
  render() {
      console.log(this.props)
    return (
     <div className="now-playing">
         <ul className="list-unstyled" >
             {this.props.nowPlayings && this.props.nowPlayings.map((item,index)=>
                 <FilmItem key={index} film={item} />
             )}
         </ul>
         <div className="more-button" onClick={() => history.push("/film/now-playing")}>更多热映电影</div>


     </div>

    );
  }
}
