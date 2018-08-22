<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0;
  padding:0;
  color:#666;
}
p,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd{
  margin:0;
  padding:0;
  list-style:none;
}
a{
  color:#666;
  text-decoration:none;
}
.clear:after{
  content:"";
  display:block;
  clear:both;
}
</style>
