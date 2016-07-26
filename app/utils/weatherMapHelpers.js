import axios from 'axios';

const APPID = '0d8e818ced0707f812c7b2f99384fa70',
	  BASE_URL = 'http://api.openweathermap.org/data/2.5/';


export default {
	getCurrentWeather(city) {
		return axios.get(`${BASE_URL}weather?q=${city}&type=accurate&APPID=${APPID}`)
			.then(weather => console.log(weather.data));
	},
	getFiveDayForecast(city) {
		return axios.get(`${BASE_URL}forecast/daily?q=${city}&type=accurate&APPID=${APPID}&cnt=5`)
			.then(weather => console.log(weather.data));
	}
};