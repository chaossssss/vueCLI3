<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{transText}}</div>
  </div>
</template>

<script>
//在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    transText: {
      type: String,
      default: '默认props'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
