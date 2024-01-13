import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const makeIconUrl = (iconId) => ` https://openweathermap.org/img/wn/${iconId}@2x.png`;

const WheatherData = async (city, units = "metric") => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await axios.get(url);

    const {
      weather,
      main: { temp, temp_min, temp_max, feels_like, pressure, humidity },
      wind: { speed },
      sys: { country },
      name,
    } = data.data;

    const { description, icon } = weather[0];

    return {
      temp,
      temp_min,
      temp_max,
      feels_like,
      pressure,
      humidity,
      speed,
      country,
      name,
      description,
      iconUrl: makeIconUrl(icon),
    };
  } catch (error) {
    return error.response.status;
  }
};

export { WheatherData };
