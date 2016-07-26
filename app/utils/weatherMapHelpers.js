import axios from 'axios';

const APPID = '0d8e818ced0707f812c7b2f99384fa70',
	  BASE_URL = 'http://api.openweathermap.org/data/2.5/';

function fetchWeather(url) {
	return axios.get(url).then(weather => weather.data);
}

export default {
	fetchCurrentWeather(city) {
		return fetchWeather(`${BASE_URL}weather?q=${city}&type=accurate&APPID=${APPID}`);
	},
	fetchFiveDayForecast(city) {
		return fetchWeather(`${BASE_URL}forecast/daily?q=${city}&type=accurate&APPID=${APPID}&cnt=5`);
	}
};