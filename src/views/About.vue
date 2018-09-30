<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input ref="input" @input="check" v-model="inputBox">
    <div>{{inputBox}}</div>
    <div>{{moinputBox}}</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function(){
    return {
    	inputBox: '默认input',
    	result: ''
    }
  },
  computed: {
  	moinputBox: function(){
  		var text = this.inputBox + '!!!!';
  		return text;
  	}
  },
  methods:{
  	check:function(){
  		this.result = this.$refs.input.value;
  		console.log(this.result);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

