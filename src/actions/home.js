import {
	RECEIVE_BILLBOARD,
	RECEIVE_HOME_NOW_PLAYING,
	RECEIVE_HOME_COMING_SOON
} from '../constants/action-types';

import * as api from '../api'; //导出所有的api方法，作为api对象的属性
import {toggleLoading} from './common';
//接收billboard
export function receiveBillboard(billboard){
	return {
		type  : RECEIVE_BILLBOARD,
		billboard
	}
}
//接收nowPlaying
export function receiveNowPlaying(nowPlaying){
	return {
		type : RECEIVE_HOME_NOW_PLAYING,
		nowPlaying
	}
}
//接收comingSoon
export function receiveComingSoon(comingSoon){
	return {
		type : RECEIVE_HOME_COMING_SOON,
		comingSoon
	}
}

//异步获取billboard
export function getBillboard(){
	return function(dispatch){
		dispatch(toggleLoading(true)); //设置loading状态，表示正在加载中
		api.getBillboard()
		   .then(data => {
		   		dispatch(receiveBillboard(data.data.billboards)); //获取服务端返回的数据
 		   		dispatch(toggleLoading(false)); //重置loading状态
		   })
		   .catch(err => {
		   		dispatch(toggleLoading(false));
		   });
	}
}
//异步获取nowPlaying
export function getNowPlaying(){
	return function(dispatch){
		dispatch(toggleLoading(true)); //设置loading状态，表示正在加载中
		api.getNowPlaying()
		   .then(data => {
		   		dispatch(receiveNowPlaying(data.data.films)); //获取服务端返回的数据
 		   		dispatch(toggleLoading(false)); //重置loading状态
		   })
		   .catch(err => {
		   		dispatch(toggleLoading(false));
		   });
	}
}
//异步获取comingSoon
export function getComingSoon(){
	return function(dispatch){
		dispatch(toggleLoading(true)); //设置loading状态，表示正在加载中
		api.getComingSoon()
		   .then(data => {
		   		dispatch(receiveComingSoon(data.data.films)); //获取服务端返回的数据
 		   		dispatch(toggleLoading(false)); //重置loading状态
		   })
		   .catch(err => {
		   		dispatch(toggleLoading(false));
		   });
	}
}
