<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Mar 12 2018
******************************************* -->
<template>
	<div>
		<First></First>
		<Third></Third>
		<Second></Second>
	</div>
</template>

<script type="text/ecmascript-6">
import First from 'components/First.vue'
import Second from 'components/Second.vue'
import Third from 'components/Third.vue'
export default {
	data: () => ({message: 'Layout VUE is here!!!!'}),
	components: {
	First,
	Third,
	Second
    },
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

</style>
