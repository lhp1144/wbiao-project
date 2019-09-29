<template>
<div class="goods">
	<div class="head_area">
		<van-grid :border="false" :column-num="6" >
			<van-grid-item>
				<router-link to="/">
					<img class="logo" src="./../../public/images/goods/goods_004.png" alt="">
				</router-link>
			</van-grid-item>
			<van-grid-item>
				商品
			</van-grid-item>
			<van-grid-item>
				详情
			</van-grid-item>
			<van-grid-item>
				评价
			</van-grid-item>
			<van-grid-item>
				门店
			</van-grid-item>
			<van-grid-item>
				...
			</van-grid-item>
		</van-grid>
	</div>
	<div class="swiper-container"  >
		<div class="swiper-wrapper" >
			<div class="swiper-slide" v-for="item in good_list">
				<img v-bind:src="item.pic" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<img class="ad" src="./../../public/images/goods/goods_002.png" alt />
		<div class="price" v-for="item in good_list">
			{{item.daoshoujia}}
		</div>
	</div>
	<div class="details_1">
		<div class="dl1">
			<span class="price_m" v-for="item in good_list">{{item.newprice}}</span><span class="price_month">×12期</span>
		</div>
		<div class="dl2">
			万表价<span v-for="item in good_list">{{item.daoshoujia}}</span>  |  市场价<span v-for="item in good_list">
			{{item.oldprice}}
			</span>
		</div>	
	</div>
	<div class="detail2">
		<div  class="dl3" v-for="item in products">{{item.des}}</div>
		<div class="dl4"> 机芯稳定性、精度、动力储存全面提升 力洛克T41.1.483.33全新升级版</div>
		<div class="dl5">
			<div class="dl5_part">顺丰包邮</div>
			<div class="dl5_part">销售:6726</div>
		</div>
	</div>
	<div class="detail3">
		<div class="dl6" v-for="item in products" >
			已选&nbsp;&nbsp;&nbsp;<span class="dl6_part">{{item.texture}}&nbsp;&nbsp;{{item.count}}个</span>
		</div>
	</div>
	
	
	
	<div class="detail4">
		<div class="detail4_part1">
				<div class="dl7">
					促销<span class="dl7_part">&nbsp;&nbsp;&nbsp;十月大促销,每500减50!!!</span>
				</div>
		</div>
		<div class="detail4_part2">
			<div class="dl8">	
				分期&nbsp;&nbsp;&nbsp;<span class="dl8_part1" v-for="item in good_list">每月&nbsp;{{item.newprice}}</span><span class="price_month">×12期</span>&nbsp;&nbsp;&nbsp;<span class="dl8_part2">免手续费</span>
			</div>
		</div>
	</div>
	

	<div>
		<img src="./../../public/images/goods/goods_003.png"/>
	</div>
	

	<footer>
		<div class="a">
			<div class="box">
					
						<i class="iconfont">&#xe601;</i>
						<div class="Typeface1">客服</div>
					
			</div>
			<div class="wrap" @click="linkToCart" >
					
						<i class="iconfont">&#xe602;</i>
						<div class="Typeface1">购物车</div>
						<span >{{num}}</span>
					
			</div>					
		</div>
		<button class="b">
			
				<div class="Typeface2" @click="count">加入购物车</div>
			
		</button>
		 <button class="c">
			
				<div class="Typeface2" >立即购买</div>
			
		 </button>
	</footer>
	
</div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Swiper from 'swiper';
import'./../../node_modules/swiper/css/swiper.min.css';
import {goods_list,products} from '../../../server/fakeDB.js';
export default {	
    name: 'manDetail',
	methods:{
		linkToCart(){
			this.$router.push({path:"/Cart"})
		},
		count(){
			let num = this.num++;
			this.$emit("changeNum",{
				data:{
					num
				}
			})
		}
	},
	data(){
		return{
			good_list:[
				{id:'001',pic:require('./../../public/images/goods/goods_005.png'),name:'天梭',newprice:'¥325.8',oldprice:'¥3910',des:'力洛克系列 自动机械...',daoshoujia:'¥3560'},
			],
			products:[
				{id:'001',name:'天梭TISSOT',pic:'images/SelectWacth/ia_400000005.jpg',des:'【天梭原装正品,全球联保两年】天梭TISSOT-力洛克系列T006.407.11.003...',texture:'钢 银色 精钢',price:'¥3910',oldprice:'¥4600',count:'1',total:'¥3910'},
				
			],
			/* products:[],
			goods_list:[], */
			num:'0'
		}
	},
	mounted(){
		//轮播图1
		this.$eventBus.$emit("showHideNav",false);
		new Swiper('.swiper-container', {
			autoplay:true,
			loop:true,
			delay: 2000,
			pagination:{
				el:'.swiper-pagination',
			}})}
		/* axios.get("/product/list?typeid="+typeid).then((result)=>{
				this.goods = result.data;
			}).catch((err)=>{
				console.error(err);
			}),
		
		axios.get("/product/list").then((result)=>{
			console.log(result.data)
			this.good_list = result.data
		}).catch((err)=>{
			console.error(err)
		}) */
	
	}
</script>

<style scoped>
.head_area{
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	height: 1rem;
	z-index: 2;
	text-align: center;
	background-color: white;
	box-shadow: 0 1px 15px 15px rgba(0, 0, 0, 0.1);
}
.swiper-container{
	width:100%;
	position:relative;
	padding-top: 1.1rem;
}
.ad{
	position:absolute;
	z-index: 10;
	bottom: 0px;
}
.price{
	position:absolute;
	z-index:20;
	font-size:0.8rem;
	font-family:border;
	color:white;
	right:0.3rem;
	bottom:0.3rem;
}
.details_1{
	width:100%;
	height:1.5rem;
}
.dl1{
	margin-top: 0.3rem;
	margin-left: 0.3rem;
	color: red;
	font-family: border;
}
.price_m{
	font-size: 0.5rem;
}
.dl2{
	
	margin-top: 0.1rem;
	margin-left: 0.3rem;
}
.detail2{
	width:100%;
	height:3.3rem;
	border-top:1px solid #AAAAAA;
	border-bottom:1px solid #AAAAAA;
	position:relative;
}
.dl3{
	margin-top:0.3rem;
	margin-left:0.1rem;
	color: #4d4d4d;
	font-size:0.4rem;
	font-family: border;
}
.dl4{
	margin-left:0.1rem;
	margin-top:0.2rem;
	color:#E8BF6A;
}
.dl5{
	display: flex;
	width: 100%;
	margin-top:0.4rem;
}
.dl5_part{
	margin-left:0.1rem;
	justify-content:space-between;
}
.detail3{
	height:0.8rem;
	border-bottom:1px solid #AAAAAA;
}
.dl6{
	margin-top:0.4rem;
	mairgin-left:0.1rem;
}
.dl6_part{
	font-size:0.33rem;
	font-family: border;
}
.detail4{
	height: 1.4rem;
}
.detail4_part1{
	height:0.6rem;
	border-bottom:1px solid #AAAAAA;
}
.dl7{
	margin-top:0.2rem;
	margin-left:0.1rem;
}
.dl7_part{
	color:red;
	font-family: border;
}
.dl8{
	margin-top:0.2rem;
	margin-left:0.1rem;
}
.dl8_part2{
	color: red;
	border:1px solid red;
}

footer{
    width: 100%;
    height: 1rem;
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    background-color: white;
  }
footer .a{
	width:40%;
	display: flex;
  }
footer .box{
	text-align: center;
	align-items: flex-start;
	margin-top: 0.2rem;
	margin-left: 0.2rem;
}  
footer .wrap{
	text-align: center;
	align-items: flex-start;
	margin-top: 0.2rem;
	margin-left: 0.2rem;
}  
footer .wrap span{
	background: red;
	position: absolute;
	top:-20px;
	width: 45px;
	height:45px;
	border-radius:50%;
	color: white;
	
}

footer .b{
    width: 30%;
    text-align: center;
	background: #96928e;
}
footer .c{
    width: 30%;
    text-align: center;
	background:#d05454;
}
footer .Typeface1{
	color:gray;
}
footer .Typeface2{
	color:white;
}
footer .iconfont{
	font-size: .34rem;
	color:#333;
	font-weight: bolder;
}
</style>