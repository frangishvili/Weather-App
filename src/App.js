import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./navigation/Router";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
