<template>
	<!-- 头部部分 -->
	<div class="header">
		<div class="headertop">
			<img src="../../public/images/SelectWacth/ia_400000001.png" @click="home">
			<input type="text" value="搜索商品">
			<p></p><!-- @click="manList" 不允许 说考虑到堆栈问题 -->
		</div>
		<div class="headerBottom">
			<ul>
				<li v-for="msg of msgs" :key="msg.id" @click="select(msg)" :class="{currentMsg:msg===currentMsg}">
					{{msg.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:'manGoodsListHeader',
		data(){
			/* const msgs=[
				{id:'01',name:'综合排序'},
				{id:'02',name:'销量优先'},
				{id:'03',name:'价格排序'},
				{id:'04',name:'筛选'},
			]; */
			return{
				msgs:[],
				currentMsg:undefined	
			}
		},
		methods:{
			select(msg){
				this.currentMsg = msg;
				/* 事件广播 点击后 把内容传递给主体区域 */
				this.$emit("changeMsg",{
					data:{
						msg
					}
				})
			}, 
			home(){
				this.$router.push({path:'/'})
			},
			/* manList(){
				this.$router.push({path:'/list-man'})
			}, */
		},
		mounted(){
			axios.get("/product/msgs").then((result)=>{
				this.msgs = result.data;
				this.currentMsg = this.msgs[0];
				
			}).catch((err)=>{
				console.error(err)
			})
		}
	}
</script>

<style scoped>
	.header{
		height:1.8rem;
		width:100%;
		position: fixed;
		border-bottom: 0.01rem solid gray;
		z-index: 1;
		
	}
	.headertop{
		box-sizing: border-box;
		padding: 0.4rem;
		display: flex;
		justify-content: space-around; 
	}
	.headertop img{
		box-sizing: border-box;
		padding:5px;
	}
	.headertop input {
		width: 5rem;
		height: .6rem;
		font-size: 0.24rem;
		color:grey;
		border: none;
		border-radius:0.5rem;
		box-sizing: border-box;
		padding-left:.7rem;
		background: url(../../public/images/SelectWacth/ia_700000029.png) no-repeat;
		background-position:-850px -356px;
		background-color:#F2F2F2;
	}
	.headertop p{
		display: inline-block;
		width: 0.8rem;
		height:0.7rem;
		background: #656B79;
		background: url(../../public/images/SelectWacth/ia_700000029.png) no-repeat;
		background-position:-520px 0px;
		margin-top:-13px;
	}
	
	.headerBottom ul{
		display: flex;
		justify-content: space-around;
		
	}
	.headerBottom li{
		font-size:0.23rem;
		color: #999;
		line-height: 0rem;
		display: block;
	}
	.headerBottom .currentMsg{
		color:red;
		font-size: 0.26rem;
	}
</style>
