<template>
	<div class="CartProduct">
		<div class="header">
			<div class="cart">购物车</div>
				<div class='al' @click="hide" ref="al" >
					 {{content}}
				</div>
				<div class="all" @click="show" ref="all" style="color:red;">
					{{text}} 
				</div>
				
		</div>
		
		<!-- 完成 -->
		<div ref="hide">
			<div class="main">
				<ul>
					<li v-for="good of goods" :key="good.id" class="list" >
						<div class="input">
							<input type="checkbox" v-model="ischecked">
							{{good.name}}
						</div>
						<div class="discount">
							<span>满减</span>
							<span>十月大促,</span>
							<span>每满500减50!</span>
							<span>...</span>
							<div></div>
						</div>
						<div class="pic">
							<input type="checkbox" v-model="ischecked">
							<img :src="good.pic">
							<div class="des">
								<div>{{good.des}}</div>
								<div>{{good.texture}}</div>
								<div class="price">
									<span>{{good.price}}</span>&nbsp;
									<span>{{good.oldprice}}</span>
									<span>×{{good.count}}</span>
								</div>
			
							</div>
						</div>
						<div class="footer">
							<div>
								<input type="checkbox"  v-model="ischecked">
								<span>全选</span>
							</div>
							<div class="total">
								<span>总计:</span>
								<span ref="total">¥{{total}}</span>
								<!-- <span ref="kong">¥0</span> -->
								
							</div>
							
							<div class="jisuan" ref="jiesuan" @click="linkTocal">结算</div>
						</div> 
					</li>
				</ul>
			</div>
		</div>
		
		<!-- 编辑删除部分 -->
		<div ref="show" style="display: none;">
			<div class="main">
				<ul>
					<li v-for="good of goods" :key="good.id" class="list">
						<div class="input">
							<input type="checkbox"  v-model="ischecked" >{{good.name}}<!-- checked="" -->
						</div>
						<div class="discount">
							<span>满减</span>
							<span>十月大促,</span>
							<span>每满500减50!</span>
							<span>...</span>
							<div></div>
						</div>
						<div class="pic">
							<input type="checkbox" v-model="ischecked">
							<img :src="good.pic">
							<div class="del">
								<span>×{{good.count}}</span>
								<span @click="del(good.id)">删除</span>
							</div>
							<!-- <div class="des">
								<div>{{good.des}}</div>
								<div>{{good.texture}}</div>
								<div class="price">
									<span>{{good.price}}</span>&nbsp;
									<span>{{good.oldprice}}</span>
									<span>×{{good.count}}</span>
								</div>
										
							</div> -->
							
						</div>
						<div class="footer">
							<div>
								<input type="checkbox" v-model="ischecked">
								<span>全选</span>
							</div>
							<div class="total">
								<span>移入收藏</span>
							
							</div>
							<div class="jisuan" ref="jisuan" @click="del(good.id)">删除</div>
						</div> 
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from "axios";
	
	export default{
		name:'Cart',
		data(){
			return{
				goods:'',
				content:'编辑',
				text:"完成",
				ischecked:false,
				
			}
		},
		methods:{
			hide(){
				this.$refs.show.style.display="block";
				this.$refs.hide.style.display="none";
				this.$refs.al.style.color="red";
				this.$refs.all.style.color="";
			},
			show(){
				this.$refs.show.style.display="none";
				this.$refs.hide.style.display="block";
				this.$refs.al.style.color="";
				this.$refs.all.style.color="red";
			},
			/* 删除数据 */
			del(id){
				let index = this.goods.findIndex((good)=>{
					return good.id === id
				})
				if(index !== -1){
					this.goods.splice(index,1);
				}
				//删除最后一个的时候 页面才跳转到空购物车页面  这个不会?
				this.$router.push({path:'/Cart/01'})
			},
			linkTocal(){
				this.$router.push({path:"/calculate"});
			}
		},
		computed:{
		    total(){
		      if(this.ischecked){
		         return this.goods.reduce((pre,item)=>{
		          return pre + (3910*item.count)
		        },0)
		      }
		    }
			
		  },
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
		
		mounted(){
			this.$eventBus.$emit("showHideNav",true);

			axios.get("/product/cart").then((result)=>{
				console.log(result.data)
				this.goods = result.data
			}).catch((err)=>{
				console.error(err)
			})
		},
	}
</script>

<style scoped>
	.CartProduct{
		width: 100%;
		height:100%;
	}
	.header{
		position: fixed;
		height:0.9rem;
		width: 100%;
		line-height:0.9rem;
		border-bottom: 1px solid #999;
		background: white;
		z-index: 1;
		
	}
	.header .cart{
		text-align: center;
		font-size: 0.32rem;
	}
	.header .all{
		font-size: 0.25rem;
		position: absolute;
		right:1rem;
		top:5px;
	}
	.header .al{
		font-size: 0.25rem;
		position: absolute;
		right:15px;
		top:5px;
	}
	.main{
		width: 100%;
		height:100%;
		position: absolute;
		top:0.9rem;
		background:#f1f1f1;
		/* z-index: -1; */
	}
	.main input{
		border-radius: 50%;
		border: 1px solid gray;
	}
	.main .list{
		height:5rem;
		margin-top: 20px;
		background: white;
	}
	.main input{
		width: 30px;
		height:30px;
		
		margin: 30px;
		
	}
	.main .discount{
		margin-left: 90px;
		font-size:0.25rem;
		color: gray;
	}
	.main .discount :nth-child(1){
		display: inline-block;
		width: 80px;
		height:40px;
		background: red;
		text-align: center;
		line-height: 40px;
		color: white;
		border-radius: 40px;
		margin-right: 10px;
	}
	.main .discount :nth-child(2){
		margin-right: 10px;
	}
	.main .discount :nth-child(4){
		position: absolute;
		right:20px;
		letter-spacing:7px;
		font-weight: 900;
	}
	.main .discount div{
		margin-top: 30px;
		border-bottom: 1px solid gray;
	}
	.main .pic img{
		width:2rem ;
		height: 2rem;
	}
	.main .pic>input{
	 position: relative;
	 top:-70px;
		
	}
	.main .des{
		display: inline-block;
		width: 4.5rem;
		font-size: 0.25rem;
	}
	.main .des :nth-child(2){
		margin-top: 7px;
		font-size: 0.24rem;
		color: gray;
	}
	.main .des .price{
		position: relative;
		top:60px;
	}
	.main .des .price :nth-child(1){
		font-size: 0.34rem;
	}
	.main .des .price :nth-child(2){
		text-decoration: line-through;
	}
	.main .des .price :nth-child(3){
		position: absolute;
		right:30px;
		color: gray;
	}
	.main .footer{
		width:100%;
		height:1rem;
		background: white;
		position: fixed;
		top:11.3rem;
		bottom: 0rem;
	}
	.main .footer .total{
		width: 3rem;
		position: absolute;
		right: 80px;
		top:30px;
	}
	.main .footer .total :nth-child(2){
		font-size: 0.4rem;
		color: red;
	}
	.main .footer .total :nth-child(3){
		font-size: 0.4rem;
		color: red;
	}
	.main .jisuan{
		position: absolute;
		right:0px;
		top:0px;
		color:white;
		width: 150px;
		height:1rem;
		background: red;
		text-align: center;
		line-height: 1rem;
		font-size: 0.3rem;
	}
	.main .del :nth-child(1){
		position: absolute;
		right:2rem;
		top:-1rem;
		font-size: 0.4rem;
		color: gray;
		z-index: 999;
	}
	.main .del :nth-child(2){
		width: 1rem;
		height:1rem;
		background: red;
		position: absolute;
		right:0.5rem;
		top:-1.5rem;
		line-height: 1rem;
		text-align-last: center;
		color: white;
		
	}
	
</style>
