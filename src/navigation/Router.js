import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CurrentWeather from "../screens/CurrentWeather/CurrentWeather";
import WeatherForeacst from "../screens/WeatherForecast/WeatherForecast";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#156DAF" },
        headerTintColor: "#F9F9F9",
      }}
    >
      <Stack.Screen name="current weather" component={CurrentWeather} />
      <Stack.Screen name="weather forecast" component={WeatherForeacst} />
    </Stack.Navigator>
  );
};

export default Routes;
