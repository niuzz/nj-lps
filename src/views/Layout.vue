<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Mar 12 2018
******************************************* -->
<template>
	<div class="wrap">
		{{ message }}
		<button class='btn btn-primary'>
			bootstrap btn
		</button>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	data: () => ({message: 'Layout VUE is here!!!!'}),
	created: function() {
		this.$(function() {
			console.log('-----------------------')
			console.log(1111)
			console.log('-----------------------')
			
		})
	}
}
</script>

<style lang="scss" scoped>
	.wrap {
		background: #000000;
		color: #fff;
	}
</style>
