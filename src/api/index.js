// 使用fetch异步获取数据
import 'whatwg-fetch';

//获取轮播图
export function getBillboard(){
    return new Promise((resolve,reject)=>{
        fetch(`http://m.maizuo.com/v4/api/billboard/home?__${+new Date()}`)
        .then(response=>response.json())
        .then(json=>resolve(json))
        .catch(err=>reject(err))
    });
}
//获取正在热映的电影
export function getNowPlaying(page,count){
	return new Promise((resolve,reject) => {
		fetch(`http://m.maizuo.com/v4/api/film/now-playing?__t=${+new Date()}&page=${page}&count=${count}`)
		.then(response => response.json())
		.then(json => resolve(json))
		.catch(err => reject(err))
	});
}
//获取即将上映的电影
export function getComingSoon(page,count){
	return new Promise((resolve,reject) => {
		fetch(`http://m.maizuo.com/v4/api/film/coming-soon?__t=${+new Date()}&page=${page}&count=${count}`)
		.then(response => response.json())
		.then(json => resolve(json))
		.catch(err => reject(err))
	});
}
//获取电影详情
export function getFilm(id){
	return new Promise((resolve,reject) => {
		fetch(`http://m.maizuo.com/v4/api/film/${id}?__t=${+new Date()}`)
		.then(response => response.json())
		.then(json => resolve(json))
		.catch(err => reject(err))
	});
}
