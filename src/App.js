
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

function App() {
  const [currentWeather, setCurrentWeather] =useState(null);
  const [forecast, setForecast] =useState(null);
  
const handleOnSerachChange = (searchData) => {
  const [lat, lon] = searchData.value.split(" ");
  const WeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`)

  Promise.all([WeatherFetch])
    .then(async(response) => {
      const weatherResponse = await response.json();

      setCurrentWeather(weatherResponse.current)
      setForecast(weatherResponse.daily)

    })

}

  return (
    <div className="container">
      <Search onSearchChange={handleOnSerachChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
