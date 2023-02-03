import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
<<<<<<< HEAD
    backgroundColor: '#F0F8FF',
=======
    backgroundColor: '#f9c2ff',
>>>>>>> aace6070b8f123c1d7cc19191c72631d110f0f9b
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  weekDayName: {
    fontWeight: 'bold'
  }
});