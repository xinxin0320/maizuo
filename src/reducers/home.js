import {
	RECEIVE_BILLBOARD,
	RECEIVE_HOME_NOW_PLAYING,
	RECEIVE_HOME_COMING_SOON
} from '../constants/action-types';

const initState = {
	billboards : [],
	nowPlayings: [],
	comingSoons : []
};
export default function home(state = initState,action){
	switch(action.type) {
		case RECEIVE_BILLBOARD:
			return {...state, billboards : action.billboard};
		case RECEIVE_HOME_NOW_PLAYING:
			return {...state, nowPlayings : action.nowPlaying};
		case RECEIVE_HOME_COMING_SOON:
			return {...state, comingSoons : action.comingSoon};
		default:
			return state;
	}
}
