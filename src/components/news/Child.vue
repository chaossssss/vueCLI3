<template>
	<div>
		<h2>父组件传给子组件{{sendData}}</h2>
		<div @click="emitMethod(`北京`)">触发修改子组件的值</div>
	</div>
</template>

<script>
export default {
  name: 'NewsChild',
  props:['sendData'],
  methods:{
    emitMethod:function(val){
      let data = {
      	cityname: val
      }
      this.$emit('showCityName','上海');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
