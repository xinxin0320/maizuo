import {
RECEVIE_FILM_DETAIL
} from '../constants/action-types';

const initState = {
	detail:{}
};
export default function detail(state = initState,action){
	switch(action.type) {
		case RECEVIE_FILM_DETAIL:
			return action.detail;

		default:
			return state;
	}
}
