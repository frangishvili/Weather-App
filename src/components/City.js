import React, { useState, useEffect } from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import WeatherData from "./WeatherData";
import styles from "./styles";
import { API_KEY } from "../constants/constants";

const City = ({ name }) => {
  const [currentWeather, setCurrentWeather] = useState();

  const { navigate } = useNavigation();

  const weatherForecastHandler = () => {
    navigate("weather forecast", {
      cityName: name,
    });
  };

  const fetchCurrentWeather = async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    setCurrentWeather(data);
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  if (!currentWeather) {
    return <></>;
  }

  return (
    <TouchableOpacity
      style={styles.cityContainer}
      onPress={weatherForecastHandler}
      activeOpacity={0.6}
    >
      <ImageBackground
        source={require("../../assets/images/weather.jpg")}
        style={styles.cityBgImage}
      >
        <WeatherData weatherData={currentWeather} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default React.memo(City);
