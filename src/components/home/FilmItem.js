import React,{Component} from 'react';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});

export default class FilmItem extends Component{
    componentWillMount(){
        let premiere = this.props.film.premiereAt;
        console.log(premiere)
    }
	render() {
		return (
			<li onClick={() => history.push(`/detail/${this.props.film.id}`)}>
				<img src={this.props.film && this.props.film.cover.origin } />
				<div className="info">
					<div>
						<h2>{this.props.film.name}</h2>
						{this.props.film && this.props.film.isNowPlaying ?
							<p>{this.props.film.cinemaCount} 家影院上映 {this.props.film.watchCount}人购票</p>
							: null
						}
					</div>
						{this.props.film && this.props.film.isNowPlaying ?
							<strong>{this.props.film.grade}</strong> :
							<strong>{this.props.film.premiereAt}月日上映</strong>
						}

					</div>
			</li>
		);
	}
}
