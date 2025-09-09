<template>
	
	<view class="content">

		<up-search placeholder="搜索景点" v-model="keyword" shape="round" :clearabled="true" bg-color="#e3e3e3"></up-search>

		<view class="marginTop">
			<up-swiper v-if="bannerList.length" keyName="image" showTitle :list="bannerList" radius="8"
				:autoplay="true" height="160"></up-swiper>
		</view>
		<view class="marginTop">
			<up-notice-bar :text="bannertext" bg-color="#ffffff" mode="closable"></up-notice-bar>
		</view>
		<view class="content-list">
			<up-waterfall v-model="flowList" ref="uWaterfallRef" columns="2">
				<template v-slot:column="{colList, colIndex}">
					<view class="demo-warter" v-for="(item, index) in colList" :key="index" @click="goDetail(item)">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img" 
							:index="index"></up-lazy-load>
						<view class="demo-title">{{item.title}}</view>
						<view class="demo-price">{{item.times}}</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">{{item.tag[0]}}</view>
							<view class="demo-tag-text">{{item.tag[1]}}</view>
						</view>
						<view class="isDot" v-if="item.isDot">{{item.isDot}}</view>
						<up-icon name="close-circle-fill" color="#f1dfd8" size="14" class="u-close"
							@click="remove(item.id)"></up-icon>
					</view>

				</template>
			</up-waterfall>
			<!-- <up-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></up-loadmore> -->
		</view>
		<view class="topClass" v-if="showTopBtn==1" @click="toTop">
			<up-icon name="arrow-upward" color="#ffffff" size="28"></up-icon>

		</view>
	</view>
</template>

<script setup>
	import {
		getBanner,
		getHomeList
	} from "../../api/api.js"
	import {
		onLoad,
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	import {
		ref,
		reactive,
		onMounted
	} from 'vue';
	import {
		random,
		guid
	} from '@/uni_modules/uview-plus';
	

	// 响应式数据  
	const keyword = ref('');
	let bannerList = ref([])
	const uWaterfallRef = ref(null);
	const loadStatus = ref('loadmore');
	const bannertext = ref('项目数据仅为测试数据，非真实数据。')
	// 瀑布流数据
	const flowList = ref([])
	const list = ref([])
	// 定义滚动是否显示
	const showTopBtn = ref(0);
	const githome = () => {
		getHomeList().then(res => {
			list.value = res.data
			addRandomData()

		})
	}
	const addRandomData = () => {
		for (let i = 0; i < 9; i++) {
			let index = uni.$u.random(0, list.value.length - 1);
			// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
			let item = JSON.parse(JSON.stringify(list.value[index]))
			item.id = guid();
			flowList.value.push(item);
		}
	};
	// 跳转详情
	const goDetail=(item)=>{
		
		const can = JSON.stringify(item)
		uni.navigateTo({
			url:`/pages/detail/detail?item=${encodeURIComponent(can)}`
		})
	
	}
	onLoad(() => {
		getBanner().then(res => {
			bannerList.value = res.data.bannerList
		})
		
	});
	onMounted(() => {
	githome()
	});
	// 清除卡片
	const remove = (id) => {
		uWaterfallRef.value.remove(id);
	};
	// 模拟触底加载更多
	onReachBottom(() => {
		setTimeout(() => {
			addRandomData();

		}, 1000)
		
	})
	// 模拟数据加载
	onPageScroll((e) => {
		if (e.scrollTop > 600) {
			showTopBtn.value = 1
		} else {
			showTopBtn.value = 0
		}
	})
	// 置顶效果
	const toTop = () => {
		uni.pageScrollTo({
			scrollTop: 100,
			duration: 300
		});
	}
	// 模拟触底加载更多
	// const onReachBottom = () => {
	//   loadStatus.value = 'loading';
	//   // 模拟数据加载
	//   setTimeout(() => {
	//     addRandomData();
	//     loadStatus.value = 'loadmore';
	//   }, 1000)
	// };
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx 20rpx;
		background-color: #faf9f3;
	}

	.topClass {
		position: fixed;
		bottom: 120rpx;
		right: 30rpx;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 20rpx;
		height: 44rpx;
		width: 44rpx;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.marginTop {
		margin-top: 14rpx;
	}

	.u-close {
		position: absolute;
		top: 18rpx;
		right: 18rpx;
	}

	.content-list {
		margin: 30rpx 0;

		.demo-warter {
			border-radius: 16rpx;
			margin: 10rpx 10rpx 10rpx 0;
			background-color: #ffffff;
			padding: 8rpx;
			position: relative;
		}

		.demo-title {
			font-size: 28rpx;
			margin-top: 10rpx;
			color: #303133;
		}

		.demo-price {
			font-size: 22rpx;
			margin-top: 10rpx;
			letter-spacing: 1px;
			color: #777;
		}

		.isDot {
			position: absolute;
			top: 32rpx;
			left: 32rpx;
			font-size: 24rpx;
			color: #fff;
			line-height: 32rpx;
			background-color: #ff0000;
			text-align: center;
			border-radius: 10rpx;
			padding: 4rpx 10rpx;

		}

		.demo-tag {
			display: flex;
			margin-top: 10rpx;

			.demo-tag-owner {
				border: solid 1px rgb(253, 163, 129);
				color: #ffaa00;
				font-size: 18rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 6rpx 14rpx;
				border-radius: 50rpx;
			}

			.demo-tag-text {
				border: solid 1px #00aaff;
				color: #00aaff;
				font-size: 18rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 20rpx;
				padding: 6rpx 14rpx;
				border-radius: 50rpx;
			}
		}
	}
</style>