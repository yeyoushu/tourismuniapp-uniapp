<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-plus/index.scss";
	/*每个页面公共css */
	.content-container {
	  padding-top: calc(var(--status-bar-height) + 44px); /* 44px 是导航栏的常见高度 */
	}
</style>
