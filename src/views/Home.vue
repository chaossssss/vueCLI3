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
  </div>
</template>

<script>
// @ is an alias to /src
// 组件使用 PascalCase命名，个人感觉舒服一点
import HelloWorld from '@/components/HelloWorld.vue'
import NewsText from '@/components/news/NewsText'
import store from '../store.js'
export default {
  name: 'home',
  data: function(){
  	return {

  	}
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
