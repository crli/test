/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let baseUrl;
let routerMode;
let imgSrc;
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'api/';
  routerMode = 'hash';
  imgSrc = 'img/';
}else{
  baseUrl = '';
  routerMode = 'hash';
  imgSrc = '';
}

export {
	baseUrl,
	routerMode,
  imgSrc
}
