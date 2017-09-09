import {
    SET_TITLE,
    TOGGLE_LOADING_STATUS,
    TOGGLE_NAV_STATUS,
     TOGGLE_TOP_STATUS } from '../constants/action-types';
//设置header的标题
export function setTitle(title){
	return {
		type : SET_TITLE,
		title
	}
}
//切换loading状态
export function toggleLoading(flag){
	return {
		type : TOGGLE_LOADING_STATUS,
		flag
	}
}
//切换nav的状态
export function toggleNav(flag){
	return {
		type : TOGGLE_NAV_STATUS,
		flag
	}
}
//切换goTop的状态
export function toggleTop(flag){
	return {
		type : TOGGLE_TOP_STATUS,
		flag
	}
}
//
