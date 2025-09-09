<template>
	<view class="line">
		<view class="mapBox">
			<map v-if="dataItem.id" style="width: 100%;height: 800rpx;" :latitude="dataItem.location[0]"
				:longitude="dataItem.location[1]" show-scale="true" :markers="dataItem.markers"></map>
		</view>
		<view class="infos">
			<view class="tit">
				当前游玩项目: {{dataItem.title}}

			</view>
			<view class="stars">
				<text> 项目推荐</text>
				<up-rate :count="count" v-model="dataItem.count"></up-rate>
			</view>
			<view class="scrollView">
				 <up-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
					<view class="items" v-for="(item,index) in  dataItem.other" :key="item.id">
						<image class="img" :src="item.url" mode="aspectFill"></image>
						<view class="title">{{item.name}}</view>

					</view>
				</up-scroll-list>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		projectInfo
	} from "../../api/api.js"
	import {
		ref,
		reactive
	} from 'vue';
	const dataItem = ref({})
	const count = ref(5)
	onLoad((props) => {
		projectInfo({
			id: props.id
		}).then((data) => {
			console.log('data', data)
			dataItem.value = data.data
		})


	})
</script>

<style lang="scss" scoped>
	.infos {
		padding: 20rpx;
		box-sizing: border-box;
         
		.tit {
			font-size: 34rpx;
			font-weight: 600;
			color: #333;
		}
		.stars{
			font-size: 28rpx;
			margin: 20rpx 0 40rpx;
			display: flex;
		}
		.items{
			margin-right: 20rpx;
			text-align: center;
		}
		.img{
			width: 320rpx;
			height: 200rpx;
			border-radius: 14rpx;
			
		}
		.title{
			font-size: 28rpx;
			font-weight: 600;
			color: #333;
		}
	}
</style>