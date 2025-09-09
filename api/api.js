import http from './http.js'

// 首页banner
export const getBanner = () => {
	return http(
		'/user/getBanner',
	);
}
// 首页列表
export const getHomeList = () => {
	return http(
		'/user/getHomeList',
	);
}

// 游玩推荐
export const project = () => {
	return http(
		'/detail/project',
	);
}
// 获取系统用户
export const getUserInfo = () => {
	return http(
		'/getUserInfo',
	);
}
// 登录
export const getLogin = (code) => {
	return http(
		'/login', {
			code
		},
		'post'
	);
}

// 项目详情
export const projectInfo = (data) => {
	return http(
		'/project/info', data
	);
}
// 我的喜欢
export const likeList = () => {
	return http(
		'/like/list',
	);
}