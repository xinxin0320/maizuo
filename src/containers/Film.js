import React, { Component } from 'react';







import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});

class Film extends Component {

  render() {
    return (
        <div>
            <div className="choosing now-playing" onClick={() => history.push("/film/now-playing")}>
            正在热映</div>
            <div className=" coming-soon" onClick={() => history.push("/film/now-playing")}>
             即将上映</div>






         </div>
    );
  }
}

export default Film;
