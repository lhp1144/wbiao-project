<template>
	<div>
		该支付啦!!!
	</div>
</template>

<script>
	export default{
		name:"calculate",
		mounted(){
			this.$eventBus.$emit("showHideNav",false);
		}
		
	}
</script>

<style scoped>
	div{
		font-size: 0.5rem;
		color: red;
		margin: 2rem auto;
		text-align: center;
	}
</style>
