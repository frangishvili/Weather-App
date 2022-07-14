import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const WeatherData = ({ weatherData }) => {
  const city = weatherData.name;
  const weatherIcon = weatherData.weather[0].icon;
  const weatherDescription = weatherData.weather[0].description;
  const temperature = weatherData.main.temp;
  const pressure = weatherData.main.pressure;
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;

  const weatherIconUrl = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;
  return (
    <View style={styles.dataContainer}>
      <View style={styles.infoWrapper1}>
        <Text style={styles.city}>{city}</Text>
        <Image
          style={styles.currentWeatherImage}
          source={{ uri: weatherIconUrl }}
        />
        <Text style={styles.text}>{weatherDescription}</Text>
      </View>
      <View style={styles.tempBox}>
        <Text style={styles.temperature}>{temperature}°</Text>
      </View>
      <View style={styles.infoWrapper2}>
        <Text style={styles.text}>{`pressure: ${pressure}`}</Text>
        <Text style={styles.text}>{`wind speed: ${windSpeed}`}</Text>
        <Text style={styles.text}>{`humidity: ${humidity}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(WeatherData);
