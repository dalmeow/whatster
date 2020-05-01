import Cookies from 'js-cookie';

export function setCookie(name,value){
	console.log('cookie set')
	Cookies.set(name,value,{sameSite: 'lax', expires: 1}); // cookie expires in 1 day
}

export function getCookie(name){
	return Cookies.get(name);
}

export function removeCookie(name){
	Cookies.remove(name);
}