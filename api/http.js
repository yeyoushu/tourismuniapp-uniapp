// e:\uniapp\旅游uniapp\api\http.js

let baseURL = 'https://m1.apifoxmock.com/m1/4728220-0-default/api'; // 替换为你的接口基础地址
// to通过环境进行判断
// if(process.env.NODE_ENV==='development'){
// 	baseURL='http://localhost:44614/api'
// }else{
// 	baseURL='https://m1.apifoxmock.com/m1/4728220-0-default/api'
// }

export default function http(
	url,
	data = {},
	method = 'GET'

) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			data,
			method,
			header: {
				"token": uni.getStorageSync('token') || ''
			},
			success: (res) => {
				if (res.statusCode === 200) {
					if (res.data.code == 1) {
						resolve(res.data);
					} else if (res.data.code == 0) {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						reject(res.data.msg);
					}

				} else {
					reject(res.data.msg);
				}
			},
			fail: (err) => {
				uni.showToast({
					title: "服务器请求异常，请联系管理员",
					icon: "none"
				})
			}
		});
	});
}