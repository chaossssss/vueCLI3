<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" trans-text="props"/>
    <NewsText/>
    <div>
    	<p>{{count}}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
    </div>
    <div class="swiper-container">
    	<div class="swiper-wrapper">
    		<div class="swiper-slide">slide1</div>
    		<div class="swiper-slide">slide2</div>
    		<div class="swiper-slide">slide3</div>
    	</div>
    	<div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 组件使用 PascalCase命名，个人感觉舒服一点
import HelloWorld from '@/components/HelloWorld.vue'
import NewsText from '@/components/news/NewsText'
import store from '../store.js'
import Swiper from 'swiper'
export default {
  name: 'home',
  data: function(){
  	return {
  		
  	}
  },
  mounted(){
  	new Swiper ('.swiper-container',{
  		loop:true,
  		pagination: '.swiper-pagination',
  	})
  },
  computed: {
  	count () {
  		return store.state.count
  	}
  },
  methods: {
  	increment(){
  		store.commit('increment')
  	},
  	decrement(){
  		store.commit('decrement')
  	}
  },
  components: {
    HelloWorld,
    NewsText
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
	width: 500px;
	height: 300px;
	margin: 20px auto;
}
</style>