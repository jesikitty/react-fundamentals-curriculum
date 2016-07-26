import axios from 'axios';

const APPID = '0d8e818ced0707f812c7b2f99384fa70';

export default {
	getCurrentWeather(city) {
		return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${APPID}`)
			.then(weather => console.log(weather.data));
	}
};