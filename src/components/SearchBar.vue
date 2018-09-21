<template>
 <div class="weather">
  <button v-on:click="search">Search</button>
  <input v-model="keyword" type="text" placeholder="Search City's Weather" value="">
  
 </div>
</template>

<script>
const axios = require('axios');
export default {

  name: 'SearchBar',
  data () {
    return {
		placeholder: 'Search City\'s Weather',
		results: [], 
		keyword: ''
    }
  },
  
  methods: {
	  search: function() {
			axios.get("https://www.metaweather.com/api/location/search/?query=" + this.keyword)
			.then(function(response) {
				this.results = response.data;
				console.log('Successful!' + response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button {
	float: right;
	margin-right: 20px;
	font-size: 14px;
	padding: 6px;
}
</style>
