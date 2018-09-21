<template>
 <div class="weather" v-if="weather.length > 0">
  <h1>{{city}}</h1>
  <img v-bind:src="icon" />
  <h2>{{temp}}</h2>
  
 </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
		weather: [],
		city: '',
		temp: 0,
		maxTemp: 0,
		minTemp: 0,
		icon: ''    //img url goes here
    }
  },
  
  mounted: function(){
	this.getAllWeathers();			//get weathers in 6 cities
  },
 
  methods: {
    getAllWeathers: function(){
		axios.get("weather.php")
			.then(function(response) {
				app.weathers = response.data.weathers;
			});
		}
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: 500;
}
</style>
