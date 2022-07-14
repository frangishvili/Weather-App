import { View } from "react-native";

import City from "../../components/City";
import styles from "./styles";

const CurrentWeather = () => {
  return (
    <View style={styles.currentWeatherContainer}>
      <City name="Tbilisi" />
      <City name="Batumi" />
      <City name="Kutaisi" />
    </View>
  );
};

export default CurrentWeather;
