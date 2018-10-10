<template>
	<div>
		<div id="container"></div> 
		<div>获取url参数{{$route.params.Id}} {{$route.query.plan}}</div>
		<div @click="changeParam(4)">修改路由参数</div>
		<router-link to="/other/7/childLinkOne/sss">child1</router-link> |
		<router-link to="/other/8/childLinkTwo">child2</router-link> 
		<router-view class="left" name="a"></router-view>
		<router-view class="right" name="b"></router-view>
	</div>
</template>

<script>
export default {
  name: 'Other',
  mounted(){
  	this.map()
  },
  watch: {
  	// 方法一
  	// "$route":"changeRoute"
  	// 方法二
  	$route(to,from){
  		console.log("route change");
  	}
  },
  methods:{
  	map(){
  		var map = new AMap.Map('container', {
  		    resizeEnable: true, //是否监控地图容器尺寸变化
  		    zoom:11, //初始化地图层级
  		    center: [116.397428, 39.90923] //初始化地图中心点
  		});
  	},
  	changeParam(id){
  		this.$router.push({
  			path:`/other/${id}`
  		})
  	},
  	changeRoute(){
  		console.log("路由改变");
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {width:300px; height: 180px; }  
.left {
	width: 220px;
	height: 400px;
}
</style>
