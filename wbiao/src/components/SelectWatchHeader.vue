<template>
	<header>
		<div class="heading">精准选表&nbsp;&nbsp;极速选表</div>
		<div>
			<input type="text" value="通过品牌、系列、型号搜索您喜爱的表款">
		</div>

	</header>
	

</template>

<script>
	export default {
		name: "SelectWatchHeader"
	}
</script>

<style scoped>
	header {
		width: 100%;
		height: 1.84rem;
		position: fixed;
		left: 0;
		top:0;
		border-bottom: 1px solid gray;
		align-content: center;
		background: #DDDDDD;
		z-index: 9999; 
	}
	header div{
		text-align: center;
		line-height: 0.8rem;
	}
	.heading{
		width:3rem;
		height:.66rem;
		background:#F2F2F2;
		border-radius: 0.1rem;
		padding: 0.1rem 0;
		margin:0.1rem 2rem 0;
		background: url(../../public/images/SelectWacth/ia_300000033.png) no-repeat;
		background-position: 8px 16px;
		color: grey;
		
		
	}
	
	

	
	input {
		width: 6.88rem;
		height: 0.6rem;
		font-size: 0.24rem;
		color:grey;
		border: none;
		border-radius:0.5rem;
		
		box-sizing: border-box;
		padding-left:.6rem;
		background: url(../../public/images/SelectWacth/ia_700000029.png) no-repeat;
		background-position:-850px -356px;
		background-color:#F2F2F2;
		}

	
</style>
