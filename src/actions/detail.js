import {
	RECEVIE_FILM_DETAIL
} from '../constants/action-types';
import * as api from '../api'; //导出所有的api方法，作为api对象的属性
import {toggleLoading} from './common';
// 接收detail
export function receiveDetail(detail){
    return{
        type:RECEVIE_FILM_DETAIL,
        detail
    }
}

// 异步获取detail
export function getFilm(id){
    return function(dispatch){
        dispatch(toggleLoading(true));
        api.getFilm(id)
            .then(data=>{
                dispatch(receiveDetail(data.data.film));
                dispatch(toggleLoading(false));
            })
            .catch(err=>{
                dispatch(toggleLoading(false));
            });
    }
}
