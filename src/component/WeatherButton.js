import React from 'react'

const WeatherButton = ({ cities, setCity }) => {
   return (
      <div className="btn_wrap">
         <button onClick={() => setCity('')}>
            <img src="./images/location_dot.png" alt="현재위치" />
            <span className="tit_current">현재 위치</span>
         </button>
         {cities.map((item) => (
            <button onClick={() => setCity(item)}>
               <img src={`/images/city_${item}.png`} alt={`도시_${item}`} />
               <span>{item}</span>
            </button>
         ))}
      </div>
   )
}

export default WeatherButton
