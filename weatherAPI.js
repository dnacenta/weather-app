const rootUrl = 'http://api.openweathermap.org/data/2.5/weather'

const apiKey = '&appid=bc6aff7f1a12eb1e5a5c4153d119a9a7'

export const fetchWeather = (lat,lon) => {
  const url = rootUrl+'?lat='+lat+'&lon='+lon+'&units=metric'+apiKey
  console.log(url)

  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      temp: json.main.temp,
      weather: json.weather[0].main
    }))
}
