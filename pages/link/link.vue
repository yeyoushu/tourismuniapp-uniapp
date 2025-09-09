<template>
	<view class="link">
		<view class="jj tj-list">
			<view class="item" v-for="(item,index) in linkList" :key="index">
				<image :src="item.img" mode="aspectFill"></image>
				<view class="topFixed">喜欢</view>
				<view class="infos">
					<view class="tit">{{item.tiele}}</view>
					<view class="desc">
						<text class="text">{{item.introduce}}</text>

					</view>

				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		likeList
	} from "../../api/api.js"
	import {
		ref,
		reactive
	} from 'vue';
	const linkList = ref([])
	onLoad(() => {
		likeList().then(res => {
			linkList.value = res.data

		})
	})
</script>

<style lang="scss" scoped>
	.link {
		padding: 20rpx;
		box-sizing: border-box;

		.tj-list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.item {
				position: relative;
				width: 43%;
				margin-bottom: 20rpx;
				box-shadow: 1px 2px 3px #e5e5e5;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				overflow: hidden;

				.topFixed {
					position: absolute;
					top: 0;
					left: 0;
					border-top-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
					background-color: #ff5500;
					color: #fff;
					text-align: center;
					font-size: 22rpx;
					padding: 5rpx 20rpx;
					box-sizing: border-box;
				}

				image {
					width: 100%;
					height: 200rpx;

				}

				.infos {
					padding: 10rpx 15rpx;

					.tit {
						font-size: 28rpx;
						font-weight: 700;
						color: #111;
						margin-bottom: 15rpx;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						flex-direction: column;
						text-overflow: ellipsis;
					}

				}

				.desc {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.text {
						font-size: 26rpx;
						color: #8a8a8a;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						flex-direction: column;
						text-overflow: ellipsis;
					}

				}
			}
		}
	}
</style>