import React, { Component } from 'react';
import "../../styles/sidebar.css";

// import {Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});

export default class Sidebar extends Component {
    direct(path){
        // 跳转
        history.push(path);
        // 隐藏sidebar
        this.props.toggleNav(this.props.showNav);
    }
  render() {
    return (
        <nav>
			<div className="nav-wrapper">
				<ul>
                    {/* <li ><span><Link to="/">首页</Link></span><i className="iconfont icon-arrow-right"></i></li>
					<li ><span><Link to="/film">影片</Link></span><i className="iconfont icon-arrow-right"></i></li>
					<li ><span><Link to="/cinema">影院</Link></span><i className="iconfont icon-arrow-right"></i></li>
					<li ><span><Link to="/shop">商城</Link></span><i className="iconfont icon-arrow-right"></i></li>
					<li ><span><Link to="/user">我的</Link></span><i className="iconfont icon-arrow-right"></i></li>
					<li ><span><Link to="/card">卖座卡</Link></span><i className="iconfont icon-arrow-right"></i></li> */}

					<li onClick={this.direct.bind(this,'/')}><span>首页</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={this.direct.bind(this,'/film')}><span>影片</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={this.direct.bind(this,'/cinema')}><span>影院</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={this.direct.bind(this,'/shop')}><span>商城</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={this.direct.bind(this,'/user')}><span>我的</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={this.direct.bind(this,'/card')}><span>卖座卡</span><i className="iconfont icon-arrow-right"></i></li>
				</ul>
			</div>
		</nav>
    );
  }
}
