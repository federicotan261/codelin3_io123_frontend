<template>
  <div id="app">
	<h1>{{appTitle}}</h1>
	<search-bar></search-bar>
	<weather></weather>
	
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
		appTitle: 'WeatherApp'
	}
  }
  
}
</script>

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
