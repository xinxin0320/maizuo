import React, { Component } from 'react';
import FilmItem from './FilmItem';
import '../../styles/comingSoon.css';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});


export default class ComingSoon extends Component {

    componentWillMount(){
        this.props.getComingSoon();
    }
  render() {
      console.log(this.props)
    return (
        <div>
            <div className="dividing-line" ><div className="upcoming" >即将上映</div></div>

         <div className="comeing-soon">
            <ul>
                {this.props.comingSoons && this.props.comingSoons.map((item,index)=>
                    <FilmItem key={index} film={item}/>
                )}
            </ul>
            <div className="more-button" onClick={() => history.push("/film/coming-soon")}>更多即将上映电影</div>


         </div>
     </div>
    );
  }
}
