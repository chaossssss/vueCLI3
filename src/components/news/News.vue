<template>
  <div>
    <div @click="changeText">
      news
    </div>
    <ul>
      <li v-for="(item, index) in dataList">
        {{index}} - {{item.name}}
      </li>
    </ul>
    <div ref="refbox">REFBOX</div>
    <div>父组件的city{{toCity}}</div>
    <Child @showCityName="updateCity" :sendData="toCity"></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'news',
  data: function(){
    return {
      dataList: [
      {
        name: '张三',age: '20'
      },
      {
        name: '李四',age: '30'
      }
      ],
      toCity:"嘉兴"
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init:function(){
      const self = this;
      this.$refs.refbox.style.color = 'red';
    },
    changeText:function(){
      console.log("事件触发");
    },
    updateCity(data){
      this.toCity = data;
      console.log("子组件传递过来的值"+this.toCity);
    }
  },
  components: {
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
