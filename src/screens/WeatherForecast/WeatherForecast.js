import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import DailyWeather from "../../components/DailyWeather";
import { API_KEY } from "../../constants/constants";
import styles from "./styles";

const WeatherForeacst = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { cityName = "" } = params || {};

  const [forecastData, setForecastData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: cityName,
    });
  }, [cityName, navigation]);

  const fetchForecastData = async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=40&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    setForecastData(data?.list);
  };

  useEffect(() => {
    fetchForecastData();
  }, []);

  if (!forecastData) {
    return <></>;
  }

  const dailyWeatherHandler = useCallback(({ item }) => {
    const props = {
      date: item.dt_txt,
      temp: item.main.temp,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
      pressure: item.main.pressure,
      windSpeed: item.wind.speed,
      humidity: item.main.humidity,
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/dailyWeather.jpg")}
          style={styles.image}
        >
          <DailyWeather {...props} />
        </ImageBackground>
      </View>
    );
  }, []);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={forecastData}
        renderItem={dailyWeatherHandler}
        keyExtractor={(item) => item.dt}
        contentContainerStyle={styles.contentcontainer}
      />
    </View>
  );
};

export default WeatherForeacst;
