<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
    </div> -->
    <footer ref="ft">
      <div>
        <router-link to="/">
         <div class="iconfont icon-shouye1"></div>
         <div class="c">首页</div>
      </router-link>
      </div>
     <div>
        <router-link to="/SelectWacth">
         <div class="iconfont icon-shoubiao"></div>
         <div class="c">选表</div>
      </router-link>
     </div>
     <div>
        <router-link to="/Cart">
         <div class="iconfont icon-gouwudai"></div>
         <div class="c">购物车</div>
      </router-link>
     </div>
      <div>
        <router-link to="/User">
         <div class="iconfont icon-04f"></div>
         <div class="c">我的</div>
      </router-link>
      </div>
    </footer>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>

</template>
<script>

export default {
  name: 'app',
  mounted(){
	this.$eventBus.$on("showHideNav",(flag)=>{
		if(flag){
			this.$refs.ft.style.display = 'flex';
		}else{
			this.$refs.ft.style.display = 'none';
		}
	});
  },
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
  #app{
    font-size: 0.28rem;
    width: 100%;
    height: 100%;
  }
  footer{
    width: 100%;
    height: 1rem;
    display: flex;
    position: fixed;
    bottom: 0px;
	z-index: 1;
	background: white;
	z-index: 1;
	

  }
  footer>div{
    width: 25%;
    text-align: center;
    
  }
  footer .iconfont{
    font-size: .34rem;
    color:#333;
    font-weight: bolder;
  }
  footer .c{
     color:#333;
  }
</style>

