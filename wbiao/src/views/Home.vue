<template>
<div class="home">
	<div class="search-area">
	  <img class="logo" src="./../../public/images/home/ia_200000002.png" alt="">
	  <div>
	    <img class="search-icon" src="./../../public/images/home/logo.png" alt srcset />
	    <input type="text" v-model="searchValue" placeholder="购表享12期分期免息优惠" @focus="showSearchModal = true" />
	  </div>
	</div>
	<div class="search-model" v-show="showSearchModal&&searchValue!==''" @click="showSearchModal = false">
	  <div class="search-list" @click="()=>{return false}">
	    <template v-if="resultList.length">
	      <div class="cell" v-for="(it,index) in resultList" :key="index" @click="searchValue = it.name">{{it.name}}</div>
	    </template>
	    <template v-else>
	      <div class="cell">暂时没有数据..</div>
	    </template>
	  </div>
	</div>
	
	<div class="swiper-container"  >
		<div class="swiper-wrapper" >
			<div class="swiper-slide" v-for="item in Carousel_one">
				<img v-bind:src="item.img" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	
	<van-grid :border="false" :column-num="4">
	  <van-grid-item v-for="item in Carousel_two">
	    <img v-bind:src="item.img" />
		{{item.name}}
	  </van-grid-item>
	</van-grid>
	
	<img class="ad" src="./../../public/images/home/ia_200000019.png" alt />
	
	<div class="tip">万表8周年·优选品牌</div>
	<div class="swiper-container"  >
		<div class="swiper-wrapper" >
			<div class="swiper-slide" v-for="item in Carousel_three">
				<img v-bind:src="item.img" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	
	<div class="grid3">
		<div class="flex">
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000023.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000024.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000025.jpg" alt />
			</div>
	  </div>
	  <div class="flex">
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000023.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000024.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000025.jpg" alt />
			</div>
	  </div>
	  <div class="flex">
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000023.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000024.jpg" alt />
			</div>
			<div class="flex-item">
				<img src="./../../public/images/home/ia_200000025.jpg" alt />
			</div>
		</div>
	</div>
	
	<div class="tip">万表8周年·本月爆款</div>
	<div class="gallery" v-for="item in Carousel_four">
		<img v-bind:src="item.img" />
	</div>
	
	<div class="limit-head" v-if="offTime">
		<p class="limit-tips">距本期结束还剩</p>
		<p class="limit-time">
			{{offTime.days}}
			<span>天</span>
			{{offTime.hours}} : {{offTime.minutes}} : {{offTime.seconds}}
		</p>
	</div>
	
	<img class="ad" src="./../../public/images/home/ia_200000019.png" alt />
</div>	
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Swiper from 'swiper';
import'./../../node_modules/swiper/css/swiper.min.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
export default {
	name: 'home',
	data() {
		return{
			//搜索
			searchList: [
				{ name: "上衣" },
				{ name: "东方" },
				{ name: "迪奥旗舰店" },
				{ name: "A万大" },
				{ name: "B东方" },
				{ name: "C东方" },
				{ name: "D东方" },
				{ name: "E东方" }
			],
			searchValue: "",
			showSearchModal: false,
			
			//轮播图1
			Carousel_one:[
				{"img":require('./../../public/images/home/ia_200000005.jpg')},
				{"img":require('./../../public/images/home/ia_200000006.jpg')},
				{"img":require('./../../public/images/home/ia_200000007.jpg')},
				{"img":require('./../../public/images/home/ia_200000008.jpg')},
				{"img":require('./../../public/images/home/ia_200000009.jpg')},
				{"img":require('./../../public/images/home/ia_200000010.jpg')},
			],
			
			Carousel_two:[
				{name:"男表","img":require('./../../public/images/home/ia_200000011.png')},
				{name:"女表","img":require('./../../public/images/home/ia_200000012.png')},
				{name:"新品首发","img":require('./../../public/images/home/ia_200000013.png')},
				{name:"新人礼","img":require('./../../public/images/home/ia_200000014.png')},
				{name:"分享赚","img":require('./../../public/images/home/ia_200000015.png')},
				{name:"名匠维修","img":require('./../../public/images/home/ia_200000016.png')},
				{name:"认证二手","img":require('./../../public/images/home/ia_200000017.png')},
				{name:"秒杀","img":require('./../../public/images/home/ia_200000018.png')},
			],
			
			Carousel_three:[
				{"img":require('./../../public/images/home/ia_200000022.jpg')},
			],
			
			Carousel_four:[
				{"img":require('./../../public/images/home/ia_200000032.png')},
				{"img":require('./../../public/images/home/ia_200000033.jpg')},
				{"img":require('./../../public/images/home/ia_200000034.jpg')},
				{"img":require('./../../public/images/home/ia_200000035.png')},
			],
			
			endTime: new Date("2019/10/1 00:00:00").getTime(),
			offTime: null,
			
        }
    },
    mounted(){
		//轮播图1
		new Swiper('.swiper-container', {
			autoplay:true,
			loop:true,
			delay: 2000,
			pagination:{
				el:'.swiper-pagination',
			},
		})
		
		let timer = setInterval(() => {
		    this.setTimeOff();
		}, 1000);
	},

	computed: {
		//搜索菜单
	  resultList() {
	    return this.searchList.filter(it => it.name.indexOf(this.searchValue)!==-1);
	  }
	},
	methods: {
	  setTimeOff() {
	    const today = new Date().getTime();
	    // 获取时间差
	    const timer = this.endTime - today;
	    // 获取天数、月数、分钟数、秒数
	    let days = Math.floor(timer / (1000 * 60 * 60 * 24));
	    let hours = Math.floor(
	      (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	    );
	    let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
	    let seconds = Math.floor((timer % (1000 * 60)) / 1000);
	    if (days <= 0) {
	      days = 0;
	      hours = 0;
	      minutes = 0;
	      seconds = 0;
	    }
	    this.offTime = {
	      days,
	      hours,
	      minutes,
	      seconds
	    };
	  },
	}
}
</script>
<style scoped>
.logo{
  height: 0.4rem;
  margin-top: 0.3rem;
  margin-right: 0.1rem;
  vertical-align: top;
}
.search-area {
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
.search-area > div {
  background-color: #efeff4;
  width: calc(100% - 1.5rem);
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.3rem;
  text-align: left;
  font-size: 0.25rem;
  color: #777777;
}
.search-area input {
  width: calc(100% - 1.5rem);
  height: 0.4rem;
  font-size: 0.25rem;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
}
.search-icon {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  vertical-align: middle;
}
.search-model {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.search-list {
  position: relative;
  background-color: white;
  max-height: 4rem;
  overflow: auto;
  border-top: 1px solid #eeeeee;
}
.search-list .cell {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding: 0.2rem 0.7rem;
  line-height: 0.5rem;
}
.content {
padding-top: 1.1rem;
padding-bottom: 2rem;
}
.ad {
  width: 100%;
}
.tip {
  font-weight: bold;
  text-align: center;
  line-height: 1rem;
}
.grid3 {
  margin: 0.5rem 0;
}
.flex {
  display: flex;
  align-items: flex-end;
  margin-top: 0.2rem;
}
.flex-item {
  flex: 1;
  height: auto;
  text-align: center;
  color: #666;
  font-size: 0.22rem;
}
.flex-item img {
  width: 70%;
}
.ad {
  width: 100%;
}
.tip {
  font-weight: bold;
  text-align: center;
  line-height: 1rem;
}
.grid3 img {
  width: 100%;
}
.grid3 .flex {
  margin: 0;
}
.limit-head {
  position: relative;
  padding: 40px 0;
  margin-bottom: 24px;
  text-align: center;
  color: #f2ddce;
  background-color: #921d1d;
}
.limit-tips {
  font-size: 0.4rem;
}
.limit-time {
  font-size: 0.35rem;
  font-weight: bold;
}
.limit-time span {
  font-size: 0.2rem;
  margin-right: 0.1rem;
	
}
/* lhp修改*/
.swiper-container{
	  z-index: -999;
		
}
</style>
