<template>
    <div class="cart">
        <div class="header">
			购物车
		</div>
		<div class="main">
			<p></p>
			<p>购物车是空的</p>
			<div>
				<span @click="home">逛逛首页</span>
				<span>查看收藏</span>
			</div>
			
		</div>
    </div>
</template>
<script>
export default {
    name: 'CartProduct',
	mounted(){
		this.$eventBus.$emit("showHideNav",true);
	},
	methods:{
		home(){
			this.$router.push({path:'/'})
		}
	}
}
</script>

<style scoped>
	.cart{
		width: 100%;
		height:92%;
		overflow:hidden;
	}
	.header{
		height:0.9rem;
		width: 100%;
		border-bottom: 1px solid #999;
		line-height: 0.9rem;
		font-size:0.32rem;
		text-align: center;
	}
	.main{
		width: 100%;
		height:97%;
		position: absolute;
		top:0.9rem;
		
		background:#f1f1f1;
		
	}
	.main :nth-child(1){
		height:1.8rem;
		width: 2rem;
		margin:1rem auto;
		background: url(../../public/images/SelectWacth/jlt.png) no-repeat;
		background-position:-158px -167px;
	}
	.main :nth-child(2){
		text-align: center;
		margin-top: -50px;
		color: gray;	
	}
	.main div{
		text-align: center;
		margin-top: 0.5rem;
	}
	.main div :nth-child(1){
		display: inline-block;
		margin-right: 0.2rem;
		width:2rem;
		height: 0.7rem;
		background: red;
		border-radius: 30px;
		color: white;
		font-size: 24px;
		line-height: 0.7rem;
	}
	.main div :nth-child(2){
		display: inline-block;
		margin-left: 0.2rem;
		width:2rem;
		height: 0.7rem;
		border: 1px solid red;
		border-radius: 30px;
		color: red;
		font-size: 24px;
		line-height: 0.7rem;
	}
	
</style>
