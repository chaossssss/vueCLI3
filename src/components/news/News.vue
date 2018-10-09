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
    <!-- emit 子组件类似于方法调用 -->
    <Child @showCityName="updateCity" :sendData="toCity"></Child>
    <div class="test">
      <div class="testNav">
        <div :class="{'selected':tab === 1,'testTitle':true}" @click="toTab(1)">标题一</div>
        <div :class="{'selected':tab === 2,'testTitle':true}" @click="toTab(2)">标题二</div>
      </div>
      <div class="container">
        <keep-alive>
          <Tab1 v-if="tab === 1"></Tab1>
          <Tab2 v-else></Tab2>
        </keep-alive>
      </div>
      <h3>重新计算开销很大的话,选computed; 不希望有缓存的选methods,必须要有一定的触发条件才能执行;watch一旦对应的键发生变化，就会调用对应的值方法。</h3>
      <div>{{fullName}}</div>
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';
import Tab1 from './tab1.vue';
import Tab2 from './tab2.vue';
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
      toCity:"嘉兴",
      tab: 1,
      firstName: '张',
      lastName: '三',
    }
  },
  // 计算属性
  computed:{
    fullName:{
      get:function(){
        return this.firstName + ' ' + this.lastName
      },
      set:function(newValue){
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length -1];
      }
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val;
    }
  },
  mounted() {
    this.init();
    this.changeFullName();
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
    },
    toTab(index){
      this.tab = index;
    },
    changeFullName(){
      this.fullName = "李 四";
    }
  },
  components: {
    Child,Tab1,Tab2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.test {
  width: 100%;
  .testNav {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    .testTitle {
      flex: 1;
      text-align: center;
    }
    .selected {
      color: red;
    }
  }
}
</style>
