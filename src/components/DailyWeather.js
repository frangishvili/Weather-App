import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const DailyWeather = ({
  date,
  temp,
  icon,
  description,
  pressure,
  windSpeed,
  humidity,
}) => {
  const weatherIconUrl = `https://api.openweathermap.org/img/w/${icon}.png`;

  return (
    <View style={styles.dailyInfoContainer}>
      <View style={styles.infoWrapper1}>
        <Text style={styles.date}>{date}</Text>
        <Image
          style={styles.dailyWeatherImage}
          source={{ uri: weatherIconUrl }}
        />
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.tempBox}>
        <Text style={styles.temperature}>{temp}°</Text>
      </View>
      <View style={styles.infoWrapper2}>
        <Text style={styles.text}>{`pressure: ${pressure}`} </Text>
        <Text style={styles.text}>{`wind speed: ${windSpeed}`} </Text>
        <Text style={styles.text}>{`humidity: ${humidity}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(DailyWeather);
