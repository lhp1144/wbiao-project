<template>
	<div class="box">
		<!-- 男士列表头部部分 -->
		<manGoodsListHeader v-on:changeMsg="switchMsg($event)"></manGoodsListHeader>
		<!-- 男士列表主体部分 -->
		<div class="main" ref="manList">
			<ul>
				<li v-for="good of goods" :key="good.id" @click="link(good.id)">
					<div class="pic"><img :src="good.pic"></div>
					<div class="price">
						<span class="yuefu">月付</span><span>{{good.newprice}}</span>&nbsp;<span>|</span>&nbsp;<span>{{good.oldprice}}</span>
					</div>
					<div class="name">
						<span>{{good.name}}</span>
						<span>{{good.des}}</span>
					</div>
					<div class="free">免息分期</div>
				</li>
			</ul>
			
		</div>
	</div>
	
</template>
	
<script>
	import axios from 'axios';
	import BScroll from 'better-scroll';
	import manGoodsListHeader from "@/components/manGoodsListHeader.vue";
	
	export default{
		name:'manGoodsList',
		data(){
			return{
				goods:[]
			}
		},
		mounted(){
			this.loadGoods('01')
			this.$eventBus.$emit("showHideNav",false);
		/* 注意:每当获取id值 点击相对应的图片时 better-scroll不生效 且点击不起作用 */
			/* this._scroll = new BScroll(this.$refs.manList, {
			    probeType: 2,
			    snap: true,
			    scrollbar: {
			        fade: true,
			        interactive: false,
			    }
			}); */
		},
		methods:{
			loadGoods(typeid){
				axios.get("/product/list?typeid="+typeid).then((result)=>{
					this.goods = result.data;
				}).catch((err)=>{
					console.error(err);
				})
			},
			switchMsg(event){
				/* this.goods = event.data.msg.name */
				let type = event.data.msg;
				this.loadGoods(type.id);
			},
			link(id){
				if(id === "001"){
					this.$router.push({path:'/goods/01'})
				}
			}
		},
		components:{
			manGoodsListHeader
		}
	}
	
</script>
	
<style scoped>
	.box{
		width: 100%;
		height:100%;
	}
	
	.main{
		width:750px;
		height:100%;
		background:#f1f1f1;
		overflow: hidden;
		position: fixed;
		top:1.84rem;
		overflow: scroll;
		
		
		
	}
	.main .pic img{
		width:360px;
		height:380px;
		
		
		
	}
	.main ul{
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
		
	}
	.main li{
		display: inline-block;
		width:49%;
		height:6rem;
		background: white;
		margin-top: 10px;
	}
	.price{
		margin:15px;
	}
	.price .yuefu{
		width:20px;
		height:10px;
		background:hotpink;
		color: white;
		padding-left: 5px;
	}
	.price span{
		padding-left: 10px;
	}
	.price :nth-child(2){
		color: hotpink;
	}
	.name{
		margin:15px;
	}
	.name :nth-child(1){
		font-weight: 800;
	}
	.name :nth-child(2){
		display: inline-block;
		margin-left: 10px;
		font-size:24px;
		color: grey;
	}
	.free{
		width: 1rem;
		height:0.3rem;
		border:1px solid #cc9952;
		color:#cc9952;
		border-radius: 5px;
		font-size: 20px;
		text-align:center;
		margin:15px;
	}
	
</style>
