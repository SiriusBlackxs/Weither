import { useEffect, useState } from 'react';
import weither_clouds from "./weither_img/clouds.png"
import weither_clear from "./weither_img/clear.png"
import weither_drizzle from "./weither_img/drizzle.png"
import weither_mist from "./weither_img/mist.png"
import weither_rain from "./weither_img/rain.png"
import weither_snow from "./weither_img/snow.png"
function GetDataWeather() {

    const [weitherIcon, setWeather] = useState(weither_drizzle);
    useEffect(() => {
        const apiKey = "a911215806285364f4943936ee3e2fa4";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=";
        let isMounted = true;
        const input_text = document.querySelector("#weither_input_text");
        const weither_button = document.querySelector("#weither_button");
        async function checkWeather(city) {
            const response = await fetch(url + city + `&units=metric&appid=${apiKey}`);
            if (response.status === 404) {
                document.querySelector(".weither_error_name").style.display = "block"
                document.querySelector(".weather_body").style.display = "none"
            } else {
                let data = await response.json();
                if (!isMounted) return;
                document.getElementById("text_windPower").textContent = data.wind.speed + "km/h";
                document.getElementById("text_percentHumidity").textContent = data.main.humidity + "%";
                document.querySelector(".weither_city").textContent = data.name;
                document.querySelector(".weither_temp").textContent = Math.round(data.main.temp) + "°C ";
                console.log(data);
                switch (data.weather[0].main) {

                    case "Clear": if (isMounted) setWeather(weither_clear)
                        break
                    case "Clouds": if (isMounted) setWeather(weither_clouds)
                        break
                    case "Drizzle": if (isMounted) setWeather(weither_drizzle)
                        break
                    case "Mist": if (isMounted) setWeather(weither_mist)
                        break
                    case "Rain": if (isMounted) setWeather(weither_rain)
                        break
                    case "Snow": if (isMounted) setWeather(weither_snow)
                        break

                    default: return false
                }
                document.querySelector(".weather_body").style.display = "block"
                document.querySelector(".weither_error_name").style.display = "none"
            }
        }

        function handleClick() {
            checkWeather(input_text.value);
        }
        weither_button.addEventListener("click", handleClick);
        return () => {
            weither_button.removeEventListener("click", handleClick);
            isMounted = false;
        };

    }, [setWeather]);
    return weitherIcon;
}
export function passMessage(weitherIcon) {
    return (
        <img src={weitherIcon} alt="img-body" className="weither_icon" />
    )
}


export default GetDataWeather;

