import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#F0F8FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  weekDayName: {
    fontWeight: 'bold'
  }
});