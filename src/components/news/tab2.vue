<template>
	<div class="tab2">
		tab2
		{{testInfo2}}
	</div>
</template>

<script>
export default {
  name: 'tab2',
  data(){
  	return{
  		testInfo2: '',
  	}
  },
  activated(){
  	console.log('tab2被激活');
  },
  deactivated(){
  	console.log('tab2被缓存');
  },
  created(){
  	setTimeout(()=>{
  		this.testInfo2 = '这是测试二的数据';
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
