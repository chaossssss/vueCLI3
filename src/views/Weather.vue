<template>
	<div>
		<el-tabs type="border-card" v-model="weatherValue" :stretch=tabStretch @tab-click="handleClick">
			<el-tab-pane
				v-for="item in weatherTab"
				:value="item.value"
				:key="item.name"
				:label="item.title"
			>
				
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
  name: 'weather',
  data:function(){
  	return {
  		tabStretch: true,
  		weatherValue: '0',
  		weatherTab:[{
  			title:"北京",
  			value:101010100,
  			name:'1',
  			content: ""
  		},{
  			title:"上海",
  			value:101020100,
  			name:'2',
  			content:""
  		},
  		{
  			title:"嘉兴",
  			value:101210301,
  			name:'3',
  			content:""
  		}
  		],
  		CityCode: '101010100',
  	}
  },
  mounted() {
  	this.getData(this.CityCode);
  },
  methods: {
  	handleClick(tab,event){
  		console.log(tab);
  		this.CityCode = tab.$attrs.value;

  		this.getData(this.CityCode);
  	},
  	getData(code){
  		var self = this
  		this.$http
  		.get('api/data/sk/'+code+'.html')
  		.then(function(response){
  			console.log(response.data);
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
