<template>

	<div ref="contentItem" class="content">
		<div>
			<div v-for="pro of products" :key="pro.id"  class="tuijian">
				<template v-if="pro.id === data.id">
					<template v-if="pro.subtypes">
						<div v-for="sub of pro.subtypes" :key="sub.id">
							<h3>---{{sub.text}}----</h3>
							<ul>
								<li v-for="list of sub.goods_list" :key="list.id" @click="linkTo(list.id)">
									<img :src="list.pic">
									<br>
									{{list.name}}
								</li>
							</ul>
						</div>
					</template>
					<template v-else>
						<h3>---{{pro.text}}----</h3>
						<ul>
							<li v-for="goods of pro.goods_list" :key="goods.id">
								<img :src="goods.pic">
								<br>
								{{goods.name}}
							</li>
						</ul>
						
					</template>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		name: 'classifyContent',
		props:["data"],
		methods:{
			linkTo(id){
				if(id==="20001"){
					this.$router.push({path:"/list-man"})
				}
				
			}
		},
		mounted() {
			console.log(this.data);
			
		    // this._scroll = new BScroll(this.$refs.contentItem, {
		    //     probeType: 2,
		    //     snap: true,
		    //     scrollbar: {
		    //         fade: true,
		    //         interactive: false,
		    //     }
		    // });
		    },
		data(){
			const products = [{
					id: "2001",
					name: '推荐',
					subtypes: [
						{
							text: '猜你喜欢',
							goods_list: [{
									id: '20001',
									name: '男表',
									pic: 'images/SelectWacth/ia_100000006382.png'
								},
								{
									id: '20002',
									name: '女表',
									pic: 'images/SelectWacth/ia_100000006383.png'
								},
								{
									id: '20003',
									name: '机械表',
									pic: 'images/SelectWacth/ia_100000006384.png'
								},
								
							]
						},
						{
							text: '国际馆',
							goods_list: [{
									id: '200010',
									name: '瑞士表',
									pic: 'images/SelectWacth/ia_100000006387.png'
								},
								{
									id: '200020',
									name: '欧美表',
									pic: 'images/SelectWacth/ia_100000006388.png'
								},
								{
									id: '200030',
									name: '机械表',
									pic: 'images/SelectWacth/ia_100000006389.png'
								},
							
							]
						},
						{
							text: '热门品牌',
							goods_list: [{
									id: '200011',
									name: '劳力士',
									pic: 'images/SelectWacth/ia_100000006395.png'
								},
								{
									id: '200022',
									name: '赫柏林',
									pic: 'images/SelectWacth/ia_100000006396.png'
								},
								{
									id: '200033',
									name: '浪琴',
									pic: 'images/SelectWacth/ia_100000006397.png'
								},
							
							]
						}
					],
					
				},
				{
					id: "2002",
					name: '顶级品牌',
					text:'顶级品牌',
					goods_list: [{
							id: '20020',
							pic: 'images/SelectWacth/ia_100000000.jpg'
						},
					]

				},
				{
					id: "2003",
					name: '奢华品牌',
					text: '奢华品牌',
					goods_list: [{
							id: '20031',
							pic: 'images/SelectWacth/ia_100000006439.jpg'
						},

					]

				},
				{
					id: "2004",
					name: '高级品牌',
					text: '高级品牌',
					goods_list: [{
							id: '20041',
							pic: 'images/SelectWacth/ia_100000006464.jpg'
						},

					]

				},
				{
					id: "2005",
					name: '轻奢时尚',
					text: '轻奢时尚',
					goods_list: [{
							id: '20051',
							pic: 'images/SelectWacth/ia_100000006487.jpg'
						},

					]

				},
				{
					id: "2006",
					name: '年轻潮牌',
					text: '年轻潮牌',
					goods_list: [{
							id: '20061',
							pic: 'images/SelectWacth/ia_100000006695.jpg'
						},

					]
				},
				{
					id: "2007",
					name: '国产智能',
					text: '国产智能',
					goods_list: [{
							id: '20071',
							pic: 'images/SelectWacth/ia_100000006735.jpg'
						},

					]

				},
				{
					id: "2008",
					name: '表带',
					text: '表带',
					goods_list: [{
							id: '20081',
							pic: 'images/SelectWacth/ia_100000000.jpg'
						},

					]

				},
				{
					id: "2009",
					name: '维修保养',
					text: '维修保养',
					goods_list: [{
							id: '20091',
							pic: 'images/SelectWacth/ia_100000006791.jpg'
						},

					]
				},
				{
					id: "2010",
					name: '二手商城',
					text: '二手商城',
					goods_list: [{
							id: '201',
							name:"限时竞拍",
							pic: 'images/SelectWacth/ia_100000006792.png'
						},
						{
							id: '202',
							name:'名表回收',
							pic: 'images/SelectWacth/ia_100000006794.png'
						},
						{
							id: '203',
							name:'权威鉴定',
							pic: 'images/SelectWacth/ia_100000006795.png'
						},

					]

				},
			];
			return {
				products

			}
		}
	}
</script>

<style scoped>
	.content {
		position: absolute;
		top: 1.84rem;
		left: 2rem;
		bottom: 0;
		width: 5.5rem;
		height: 100%;
	}

	.tuijian h3 {
		text-align: center;
		color: grey;
		line-height: 1.5rem;
	}

	.tuijian ul {
		display: flex;
		justify-content: space-around;

	}

	.tuijian li {
		text-align: center;

	}
</style>
