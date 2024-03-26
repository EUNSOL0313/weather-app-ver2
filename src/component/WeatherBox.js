import React from 'react'

const WeatherBox = ({ weather }) => {
   console.log('weather', weather)
   return (
      <div className="weatherbox">
         <h1 className="temp">
            {Math.round(weather?.main.temp)}
            <span className="temp_sign">°</span>
            <span className="temp_celsius">C</span>
         </h1>
         <div className="icon_weather">
            <img src={`/images/${weather?.weather[0].icon}.png`} alt="날씨 아이콘" />
         </div>

         <h3 className="city">{weather?.name}</h3>
         <span className="weather_desc">{weather?.weather[0].description}</span>
         <div className="row weather_items">
            <div className="col-4 item">
               <h4 className="tit">습도</h4>
               <span className="txt">{weather?.main.humidity}%</span>
            </div>
            <div className="col-4 item">
               <h4 className="tit">최고온도</h4>
               <span className="txt">{weather?.main.temp_max}%</span>
            </div>
            <div className="col-4 item">
               <h4 className="tit">최저온도</h4>
               <span className="txt">{weather?.main.temp_min}%</span>
            </div>
         </div>
      </div>
   )
}

export default WeatherBox
