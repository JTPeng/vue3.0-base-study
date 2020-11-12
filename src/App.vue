<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/todoList">TodoList</router-link> |
    <router-link to="/recursion">递归监听</router-link> |
    <router-link to="/notRecursion">非递归监听</router-link> |
    <router-link to="/toRow">toRow</router-link> |
    <router-link to="/toRef">ToRef</router-link> |
    <router-link to="/toRefs">ToRefs</router-link> |
    <router-link to="/customRef">CustomRef</router-link>|
    <router-link to="/watcher">watcher</router-link> |
    <router-link to="/computeder">computeder</router-link> |
    <router-link to="/renderFunc">渲染函数</router-link> |
    <router-link to="/parentProvide">提供/注入</router-link>|
    <router-link to="/templateUse">模板引用</router-link> |
    <router-link to="/customEvent">自定义事件</router-link> |
    <router-link to="/mouseMove">鼠标点击</router-link> |
    <router-link to="/httpRequest">Axios</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/asyncSuspense">asyncSuspense</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
