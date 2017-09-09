import React, { Component } from 'react';
import FilmItem from '../home/FilmItem';

export default class NowPlaying extends Component {
    componentWillMount(){
        // this.props.getNowPlaying();
    }
  render() {
      console.log(this.props)
    return (
     <div className="now-playing">
         <ul>
             {this.props.nowPlayings && this.props.nowPlayings.map((item,index)=>
                 <FilmItem key={index} film={item} />
             )}
         </ul>


     </div>

    );
  }
}
