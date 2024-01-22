import weither_img_search from "./weither_img/search.png"
import weither_img_humidity from "./weither_img/humidity.png"
import weither_img_wind from "./weither_img/wind.png"
import GetDataWeather, { passMessage } from './apiWeather';
function App() {
  const weitherIcon = GetDataWeather();
  return (
    <>
      <div className="App">
        <div className="weither_container">
          <div className="weither_description">
            <div className="search_button">
              <input id="weither_input_text" type="text" placeholder="Enter city name" spellCheck="false"></input>
              <button id="weither_button"><img id="weither_img_search" src={weither_img_search} alt="img-search" /></button>
            </div>
            <div className="weither_error_name"><p>Invalid city name</p></div>
            <div className="weather_body">
              {passMessage(weitherIcon)}
              <h1 className="weither_temp">22C</h1>
              <h2 className="weither_city">Roma</h2>
              <div className="weither-detail">
                <div className="weither-img-humidity">
                  <img src={weither_img_humidity} alt="img-humidity"></img>
                  <div>
                    <p id="text_percentHumidity">50%</p>
                    <p id="text_humidityDescription">Humidity</p>
                  </div>
                </div>
                <div className="weither-img-wind">
                  <div>
                    <img src={weither_img_wind} alt="img-wind"></img>
                  </div>
                  <div>
                    <p id="text_windPower">15km/h</p>
                    <p id="text_windDescription">Wind speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );

}

export default App;
