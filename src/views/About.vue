<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input ref="input" @input="check" v-model="inputBox">
    <div>{{inputBox}}</div>
    <div>{{moinputBox}}</div>
    <div v-for="item in items">
    	{{item}}
    </div>
    <div class="button-box" @click="changeItem1">changeItem1按钮</div>
    <div class="button-box" @click="changeItem2">changeItem2按钮</div>
    <div v-for="user in userProfile" >
    	{{user}}
    </div>
    <div @click="addProperty">addProperty</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function(){
    return {
    	inputBox: '默认input',
    	result: '',
    	items: ['a','b','c'],
    	userProfile: {
    		name: '小米'
    	}
    }
  },
  computed: {
  	moinputBox: function(){
  		var text = this.inputBox + '!!!!';
  		return text;
  	}
  },
  updated:function(){
  	console.log('数据更新'+this.items[0]);
  },
  methods:{
  	check:function(){
  		this.result = this.$refs.input.value;
  		console.log(this.result);
  	},
  	changeItem1:function(){
  		this.items[0] = 'x';
  		console.log('changeItem1'+this.items[0]);
  	},
  	changeItem2:function(){
  		this.$set(this.items, 0, 'y');	//触发视图更新
  		console.log('changeItem2'+this.items[0]);
  	},
  	addProperty:function(){
  		this.$set(this.userProfile,'age','12');
  		console.log("修改",this.userProfile);
  		this.userProfile = Object.assign({},this.userProfile,{
  			job: 'student',
  			favoriteColor: 'Vue Green'
  		})
  		console.log('添加数据',this.userProfile);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.button-box {
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px #333 solid;
		margin: 10px auto 10px;
	}
</style>

