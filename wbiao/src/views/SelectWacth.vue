<template>
	<div class="selectWacth">
		<!-- 选表头部 -->
		<SelectWatchHeader></SelectWatchHeader>
		<!-- 选表的左导航 -->
		<div class="classify">
			<div class="leftNav">
				<ul>
					<li @click="select(goods)" v-for="goods of goods_list" v-bind:key="goods.id" :class="{currentGoods: goods === currentGoods}">
					{{ goods.name }}
					</li>
				</ul>
				
			</div>
		<!-- 选表的右侧内容 -->
		<classifyContent v-bind:data="currentGoods"></classifyContent>
		
 

		</div>


	</div>

</template>

<script>
	import SelectWatchHeader from "@/components/SelectWatchHeader.vue";
	import classifyContent from "@/components/classifyContent.vue";
	export default {
		name: 'SelectWacth',
		
		data() {
			const goods_list = [{
					id: "2001",
					name: '推荐'
				},
				{
					id: "2002",
					name: '顶级品牌'
				},
				{
					id: "2003",
					name: '奢华品牌'
				},
				{
					id: "2004",
					name: '高级品牌'
				},
				{
					id: "2005",
					name: '轻奢时尚'
				},
				{
					id: "2006",
					name: '年轻潮牌'
				},
				{
					id: "2007",
					name: '国产智能'
				},
				{
					id: "2008",
					name: '表带'
				},
				{
					id: "2009",
					name: '维修保养'
				},
				{
					id: "2010",
					name: '二手商城'
				},
			];
			return {
				goods_list,
				currentGoods:goods_list[0]
			}
		
		},
		methods:{
			select(goods){
				this.currentGoods = goods;
			}
		},
		mounted(){
			this.$eventBus.$emit("showHideNav",true);
			console.log(this.currentGoods)
			console.log(this.goods)
		},
		components: {
			SelectWatchHeader,
			classifyContent
		}
	}
</script>
<style scoped>
	.classify {
		width: 100%;
		height: 100%;
		
	}

	 .classify .leftNav {
		width: 2rem;
		position: absolute;
		top: 1.84rem;
		
		border-right: 0.01rem solid grey;
		
		
	}

	.leftNav li {
		
		font-weight: 500;
		/* width: 2rem;
		height: 1rem; */
		line-height: 1rem;
		box-sizing: border-box;
		font-size: .24rem;
		
		color: #666;
		text-align: center;
		border-bottom: .026667rem solid #f0f0f0;
		}
	.leftNav .currentGoods{
		font-size: .34rem;
		 color: orange;
		
	}
</style>
