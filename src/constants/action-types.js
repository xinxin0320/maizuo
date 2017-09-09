//定义所有action的名称

//公共组件的状action
export const SET_TITLE = 'SET_TITLE'; //设置标题
export const TOGGLE_LOADING_STATUS = 'TOGGLE_LOADING_STATUS'; //切换loading状态
export const TOGGLE_NAV_STATUS = 'TOGGLE_NAV_STATUS'; //切换nav菜单的状态
export const TOGGLE_TOP_STATUS = 'TOGGLE_TOP_STATUS'; //切换goTop的状态

//首页组件的action
export const RECEIVE_BILLBOARD = 'RECEIVE_BILLBOARD'; //接受billboards数据
export const RECEIVE_HOME_NOW_PLAYING = 'RECEIVE_HOME_NOW_PLAYING'; //接受nowplaying数据
export const RECEIVE_HOME_COMING_SOON = 'RECEIVE_HOME_COMING_SOON'; //接受comingsoon数据

//影片列表的action
export const RECEIVE_FLIM_NOW_PLAYING = 'RECEIVE_FLIM_NOW_PLAYING'; //接受nowplaying数据
export const RECEIVE_FLIM_COMING_SOON = 'RECEIVE_FLIM_COMING_SOON'; //接受comingsoon数据
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB'; //设置currentTab的值

//详情页的action
export const RECEVIE_FILM_DETAIL = 'RECEVIE_FILM_DETAIL'; //获取电影详情
