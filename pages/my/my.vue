<template>
	<view class="content">
		<view class="topBox">
			<view class="setbox">
				<view class="set-left">
					<uni-icons type="calendar" size="30" color="#fff"></uni-icons>
					<view class="set-left-text">签到</view>
				</view>
				<view class="set-right">
					<uni-icons type="gear" size="30" color="#fff"></uni-icons>
					<uni-icons type="chat" size="30" color="#fff"></uni-icons>

				</view>

			</view>
			<view class="users">
				<view class="users-top" @click="setFun">
					<template v-if="!userInfo.nickName">
						<view>
							<image src="../../static/tt.jpg" mode="aspectFill"></image>
						</view>

						<view class="tit">
							注册/登录
						</view>
					</template>
					<template v-else>
						<image :src="userInfo.avatarUrl" mode="aspectFill"></image>
						<view class="tit">
							{{userInfo.nickName}}
						</view>

					</template>
				</view>
				<view class="users-bottom">
					<view class="users-item">
						<view class="num">12</view>
						<view class="users-item-tit">点赞</view>
					</view>
					<view class="users-item">
						<view class="num">24</view>
						<view class="users-item-tit">喜欢</view>
					</view>
					<view class="users-item">
						<view class="num">38</view>
						<view class="users-item-tit">浏览</view>
					</view>
					<view class="users-item">
						<view class="num">34</view>
						<view class="users-item-tit">收藏</view>
					</view>
				</view>
			</view>
		</view>
		<view class="listBox">
			<view class="listBox-list">
				<uni-list>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" showArrow
						title="个人信息" clickable></uni-list-item>
						<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon2" showArrow
							title="我的购物车" clickable></uni-list-item>
							<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon3" showArrow
								title="用户反馈" clickable></uni-list-item>
								<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon4" showArrow
									title="我的邮件" clickable></uni-list-item>
									<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon5" showArrow
										title="分享有礼" clickable></uni-list-item>
				</uni-list>
			</view>
		</view>
		<up-popup closeable :show="show" @close="close">
			<view class="popup">
				<view class="title">获取您的昵称，头像</view>
				<view class="flex">
					<view class="label">获取用户头像：</view>
					<button class="warpper" open-type="chooseAvatar" @chooseavatar="onChooseavatar">
						<image :src="userInfo.avatarUrl" class="warpper-image" mode="aspectFill"></image>

					</button>
				</view>
				<view class="flex">
					<view class="label">获取用户昵称：</view>
					<input @input="changeName" type="nickname" />
				</view>
				<button size="default" type="primary" @click="userSubmit">确定</button>
			</view>
		</up-popup>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'

	import {
		getLogin,
		getUserInfo
	} from "../../api/api.js"
	const userInfo = reactive({
		nickName: '',
		avatarUrl: ''

	});
	// 图标处理
	const extraIcon1 = reactive({
		color: '#666666',
		size: '22',
		type: 'auth'
	});
	const extraIcon2 = reactive({
		color: '#666666',
		size: '22',
		type: 'cart'
	});
	const extraIcon3 = reactive({
		color: '#666666',
		size: '22',
		type: 'chatboxes'
	});
	const extraIcon4 = reactive({
		color: '#666666',
		size: '22',
		type: 'email'
	});
	const extraIcon5 = reactive({
		color: '#666666',
		size: '22',
		type: 'gift'
	});
	onLoad(async () => {
		// 免登逻辑
		if (uni.getStorageSync('token') && !uni.getStorageSync('userInfo')) {
			try {
				const userName = await getUserInfo();
				userInfo.nickName = userName.data.nickName;
				userInfo.avatarUrl = userName.data.avatarUrl;
			} catch (e) {
				// 错误处理
				console.error('获取用户信息失败', e);
			}
		} else if (uni.getStorageSync('token') && uni.getStorageSync('userInfo')) {
			try {
				const userInfoStr = uni.getStorageSync('userInfo');
				if (userInfoStr) {
					const {
						nickName,
						avatarUrl
					} = JSON.parse(userInfoStr);
					userInfo.nickName = nickName;
					userInfo.avatarUrl = avatarUrl;
				}
			} catch (e) {
				// 错误处理
				console.error('解析用户信息失败', e);
			}
		}
	});
	const show = ref(false);
	const close = () => {
		// 关闭逻辑，设置 show 为 false  

		show.value = false;
		
	}
	// 点击按钮获取用户信息
	const onChooseavatar = (e) => {
	
		userInfo.avatarUrl = e.detail.avatarUrl

	}
	const changeName = (e) => {
		userInfo.nickName = e.detail.value
	}
	const userSubmit = () => {

		uni.setStorageSync('userInfo', JSON.stringify(userInfo))
		show.value = false;
	}
	const setFun = () => {
		// 给用户一个确认的提醒
		uni.showModal({
			title: '温馨提示',
			content: '亲,授权微信登录后才能正常使用小程序',
			success(res) {
				if (res.confirm) {
					uni.login({
						success: async (data) => {
							const token = await getLogin(data.code)

							uni.setStorageSync('token', token.data.token)
							const userName = await getUserInfo()
							userInfo.nickName = userName.data.nickName
							userInfo.avatarUrl = userName.data.avatarUrl
							show.value = true
						}
					})

				}

			}
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		background-color: #f5f5f5;

		.topBox {
			width: 100%;
			position: relative;
			z-index: 1;
			overflow: hidden;
			padding: 40rpx 20rpx 40rpx;
			box-sizing: border-box;
		}

		.topBox::after {
			content: '';
			width: 140%;
			height: 300rpx;
			position: absolute;
			z-index: -1;
			top: 0%;
			left: -20%;
			background-color: #00aaff;
			border-radius: 0 0 50% 30%;
		}

		.popup {
			padding: 20rpx;
			border-radius: 20rpx;

			.title {
				font-size: 40rpx;
				margin-bottom: 20rpx;
				text-align: center;
			}

			.flex {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #f5f5f5;
				padding: 24rpx 0;

				.warpper-image {
					width: 70rpx;
					height: 70rpx;
				}

				.warpper {
					border: none;
					border-radius: 10rpx;
					width: 70rpx;
					height: 70rpx;
					margin-left: 20rpx;
					padding: 0;
				}
			}
		}

		.users {
			margin-top: 35rpx;
			padding: 30rpx;
			box-sizing: border-box;
			height: 280rpx;
			background-color: #fff;
			box-shadow: 1rpx 10rpx 20rpx #ececec;
			border-radius: 16rpx;

			.users-top {
				display: flex;
				justify-content: flex-start;
				flex-wrap: nowrap;
				align-items: center;
				margin-bottom: 30rpx;

				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.tit {
					font-size: 34rpx;
					font-weight: 700;
					color: #000;
					width: auto;
				}
			}

			.users-bottom {
				display: flex;
				justify-content: space-around;
				align-items: center;

				.users-item {
					text-align: center;

					.users-item-tit {
						color: #757575;
						font-size: 26rpx;
						margin-top: 10rpx;

					}

					.num {
						color: #000;
						font-size: 33rpx;
						font-weight: 700;
					}
				}
			}
		}

		.setbox {
			display: flex;
			justify-content: space-between;
			algin-item: center;

			.set-left {
				width: 18%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.set-left-text {
					font-size: 32rpx;
					color: #fff;
				}
			}
		}
		.listBox{
			height: 200rpx;
			margin: -10rpx auto 0;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 12rpx;
		}
	}
</style>