    //
    import {
        SET_TITLE,
        TOGGLE_LOADING_STATUS,
        TOGGLE_NAV_STATUS,
        TOGGLE_TOP_STATUS } from '../constants/action-types';

        const initState = {
            title : '卖座电影',
            loading : false,
            showNav : false,
            showTop : false

        };

        export default function common(state = initState,action){
            switch(action.type){
                case SET_TITLE:
                    return {...state,title : action.title};
                case TOGGLE_LOADING_STATUS:
        			return {...state, loading : action.flag};
        		case TOGGLE_NAV_STATUS:
        			return {...state, showNav : action.flag};
        		case TOGGLE_TOP_STATUS:
        			return {...state, showTop : action.flag};
        		default:
        			return state;
            }
        }
