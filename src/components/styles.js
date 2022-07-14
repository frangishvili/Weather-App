import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const styles = StyleSheet.create({
  cityContainer: {
    height: "33%",
    marginVertical: 2,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.brColor,
    borderRadius: 8,
    overflow: "hidden",
  },

  cityBgImage: {
    flex: 1,
  },

  dailyInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  infoWrapper1: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: GlobalStyles.colors.infoTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  dailyWeatherImage: {
    width: 60,
    height: 60,
  },

  tempBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  temperature: {
    fontSize: 32,
    color: GlobalStyles.colors.tempColor,
  },

  infoWrapper2: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 20,
  },

  text: {
    fontSize: 14,
    fontWeight: "600",
    color: GlobalStyles.colors.infoTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  dataContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 20,
  },

  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.infoTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  currentWeatherImage: {
    width: 80,
    height: 80,
  },
});

export default styles;
