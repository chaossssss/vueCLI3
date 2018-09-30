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
  </div>
</template>

<script>
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
      ]
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
