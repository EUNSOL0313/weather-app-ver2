import { useEffect, useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClipLoader from 'react-spinners/ClipLoader'

const API_KEY = process.env.REACT_APP_API_KEY
const cities = ['Seoul', 'Paris', 'New York', 'Barcelona']

function App() {
   const [weather, setWeather] = useState(null)
   const [city, setCity] = useState('')
   const [loading, setLoading] = useState(false)

   const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const lat = position.coords.latitude
         const lon = position.coords.longitude
         console.log(lat, lon)
         getCurrentLocationWeather(lat, lon)
      })
   }

   const getCurrentLocationWeather = async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      setLoading(true)
      let response = await fetch(url)
      let data = await response.json()
      setWeather(data)
      setLoading(false)
   }

   const getWeatherByCity = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      setLoading(true)
      let response = await fetch(url)
      let data = await response.json()
      setWeather(data)
      setLoading(false)
   }

   useEffect(() => {
      if (city === '') {
         getCurrentLocation()
      } else {
         getWeatherByCity()
      }
   }, [city])

   return (
      <div>
         {loading ? (
            <div className="content">
               <ClipLoader color="#25478c" loading={loading} size={150} />
            </div>
         ) : (
            <div className="content">
               <WeatherBox weather={weather} />
               <WeatherButton cities={cities} setCity={setCity} />
            </div>
         )}
      </div>
   )
}

export default App
