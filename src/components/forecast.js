import React from "react";
import Seven from "./seven";
import './forecast.scss'

class Forecast extends React.Component {
  
  render() {
    var yt=[];
    const city=this.props.searchValue;
   
    // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API}`).then(
    //     res=> res.json()).then(
    //       data => {
            
    //         for(let i=0;i<5;i++)
    //         {
    //          // console.log(data.list[i].main.temp);
    //         yt.push(data.list[i].main.temp);
             
    //         }
    //         console.log(yt)
    //        document.getElementById("one").innerHTML=yt;
          
    //       }
    //     ).catch(error => console.log(error))
    var f=-1;
    const item = this.props.day.map((k, j) => {
     
      const image = {
        url: `http://openweathermap.org/img/wn/${k.weather[0].icon}@2x.png`,
        alt: `Image of  ${k.weather[0].description}`,
      };
      const description = k.weather[0].description;
     
   f++;
    if(f<7)
    {
      return (
        <div key={j} className="forecast-item">
          <p className="forecast-item__time"></p>
          <p className="forecast-item__temp">
            {((k.temp.day-32)*5/9).toFixed(2)} <span className="forecast-item__degree">°</span>
          </p>
          <img className="forecast-item__img" src={image.url} alt={image.alt} />
          <p className="forecast-item__description">{description}</p>
        </div>
      );
    
    }
     
    });
    
       

    
    
   
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };
      const description = f.weather[0].description;
      const unixTimestamp = f.dt;
      let hour = new Date(unixTimestamp * 1000).getHours();
      let ampm = 'AM';
      if (hour === 0) hour = 12; 
      else if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
      }

      return (
        <div key={i} className="forecast-item">
          <p className="forecast-item__time">{hour} {ampm}</p>
          <p className="forecast-item__temp">
            {((f.temp-32)*5/9).toFixed(2)} <span className="forecast-item__degree">°</span>
          </p>
          <img className="forecast-item__img" src={image.url} alt={image.alt} />
          <p className="forecast-item__description">{description}</p>
        </div>
      );
    });

    return (
      <div className="forecast">
        <h3 className="forecast__title">Hour Forecast</h3>
        <div className="forecast-items">{items}</div>
        <h3 className="forcast_title">Seven days Forcast</h3>
        <div className="forecast-items">{item}</div>
        
      </div>
    );
  }
}

export default Forecast;
