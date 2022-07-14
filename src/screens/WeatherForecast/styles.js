import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bgColor,
  },

  contentcontainer: {
    paddingBottom: 100,
  },

  container: {
    flex: 1,
    height: 140,
    marginHorizontal: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.brColor,
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },
});

export default styles;
