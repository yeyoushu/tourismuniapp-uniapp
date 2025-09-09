<template>
	<view class="detail">
		<up-navbar title="" bg-color="#ebebeb" height="0" left-icon-color="#fff" :autoBack="true" />


		<view class="d-con">
			<image :src="item.dt.img" mode="aspectFill"></image>
		</view>
		<view class="d-content">
			<view class="j-con">
				<view class="title">
					<text style="margin-right: 7rpx; font-size: 32rpx;">
						{{item.dt.title}}
					</text>
					<up-tag text="5A级景区" size="mini" shape="circle"></up-tag>
				</view>
				<view class="jj">
					<text style="font-weight: 700;font-size: 28rpx;">景区介绍：</text>
					<text class="nr">{{item.dt.introduce}}</text>
				</view>
				<view class="j-time">
					<text style="font-weight: 700;font-size: 28rpx;">开放时间：</text>
					<text class="j-time-content">{{item.dt.times}}</text>
				</view>
				<view class="recommend">
					<view class="recommend-tit" style="font-size: 32rpx;font-weight: 700;">游玩推荐</view>
					<view class="recommend-list">
						<view class="item" v-for="(item,index) in projectList" :key="index" @click="goLine(item)">
							<image :src="item.url" mode="aspectFill"></image>
							<view class="topFixed">{{item.tag}}</view>
							<view class="infos">
								<view class="tit">{{item.title}}</view>
								<view class="desc">
									<up-icon name="map" color="#9c9c9c" size="16"></up-icon>
									<text class="text">{{item.desc}}</text>
								</view>
							</view>
						</view>
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
		ref,
		reactive
	} from 'vue';
	import {
		project
	} from "../../api/api.js"
	const item = reactive({
		dt: ''
	})
	const projectList = ref([])
	onLoad((can) => {
		item.dt = JSON.parse(decodeURIComponent(can.item))
		project().then(res => {
			projectList.value = res.data
			console.log('item', res.data)
		})

	})
	// 游玩推荐
	const goLine=(item)=>{
		uni.navigateTo({
			url:`/pages/line/line?id=${item.id}`
		})
	}
</script>
<style>
	::v-deep .u-tag__text--mini{
		line-height:26px !important;
		text-align: center !important;
	}
</style>
<style lang="scss" scoped>
	::v-deep .u-status-bar.data-v-eb8e0cdd {
		width: 0 !important;
	} 
		

 
	.detail {

		background-color: #f5f5f5;

		.d-content {
			width: 100%;
			height: 700rpx;
			margin-top: -40rpx;
			background-color: #fff;
			padding: 35rpx 30rpx;
			box-sizing: border-box;
			border-radius: 0 30rpx;
			position: relative;
			z-index: 12;

			.j-con {
				margin-bottom: 30rpx;

				.title {
					display: flex;
					font-size: 36rpx;
					font-weight: 700;
					color: #111;
					margin-bottom: 30rpx;
				}

				.jj {
					// display: flex;

					.nr {
						font-size: 26rpx;
						color: #8a8a8a;
						line-height: 40rpx;
					}
				}
               .recommend-list{
				   display: flex;
				   flex-wrap: wrap;
				   justify-content: space-between;
				   margin-top: 34rpx;
				   .item{
					   position: relative;
					   width: 48%;
					   margin-bottom: 20rpx	;
					   box-shadow: 1px 2px 3px #e5e5e5;
					   // border-radius: 0 20rpx;
					   border-top-left-radius: 20rpx;
					   border-top-right-radius: 20rpx;
					   overflow: hidden;
					   .topFixed{
						   position: absolute;
						   top: 0;
						   left: 0;
						   border-top-left-radius: 20rpx;
						   border-bottom-right-radius: 20rpx;
						   background-color: #ffaa7f;
						   color: #fff;
						   text-align: center;
						   font-size: 22rpx;
						   padding: 5rpx 20rpx;
						   box-sizing: border-box;
						   
					   }
					   image{
						   width: 100%;
						   height: 200rpx;
					   }
					   .infos{
						   padding: 10rpx 15rpx;
						   .tit{
							   font-size: 28rpx;
							   font-weight: 700;
							   color: #111;
							   margin-bottom: 15rpx;
							   text-overflow: ellipsis;
						   }
						   .desc{
							   display: flex;
							   justify-content: flex-start;
							   align-items: center;
							   .text{
								   font-size: 26rpx;
								   color: #8a8a8a;
								   margin-bottom: 4rpx;
							   }
						   }
					   }
				   }
				   
			   }
				.j-time {
					margin: 40rpx 0;

					.j-time-content {
						font-size: 26rpx;
						color: #8a8a8a;
						line-height: 40rpx;
					}
				}

			}
		}

		.d-con {
			image {
				width: 100%;
				height: 600rpx;
			}
		}
	}
</style>