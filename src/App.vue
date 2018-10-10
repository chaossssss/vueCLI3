<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'other', params:{ Id:3 }, query:{plan: 'private'}}">Other</router-link> |
      <router-link to="/other/10">Other 两种写法</router-link> |
      <router-link to="/faker/11">重定向的路由</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
