<template>
	<div class="tab1">
		tab1
		{{testInfo1}}
	</div>
</template>

<script>
export default {
  name: 'tab1',
  data(){
  	return{
  		testInfo1: '',
  	}
  },
  activated(){
  	console.log('tab1被激活');
  },
  deactivated(){
  	console.log('tab1被缓存');
  },
  created(){
  	setTimeout(()=>{
  		this.testInfo1 = '这是测试一的数据';
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
