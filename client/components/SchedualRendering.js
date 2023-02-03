import React from "react";
<<<<<<< HEAD
import { Text, FlatList, AsyncStorage, SafeAreaView } from "react-native";
=======
import { Text, FlatList, AsyncStorage, SafeAreaView, View } from "react-native";
>>>>>>> aace6070b8f123c1d7cc19191c72631d110f0f9b
import schedualStyles from "../styles/schedualStyles";

export default function SchedualRendering({ weekDayName }) {
    const [weekDayArray, setWeekDayArray] = React.useState();
    const [geted, setGeted] = React.useState(false)

    React.useEffect(() => {
        async function getAsyncStorageData() {
            const schedualFromAsyncStorage = await AsyncStorage.getItem('Schedual');
            setWeekDayArray(JSON.parse(schedualFromAsyncStorage)[weekDayName]);
            setGeted(true)
        }
        if (geted === false) {
            getAsyncStorageData();
        }
    });

    return (
<<<<<<< HEAD
        <SafeAreaView>
            <Text style={schedualStyles.weekDayName}>{weekDayName}</Text>
            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
            }
=======
        <SafeAreaView style={schedualStyles.container}>
            <Text style={schedualStyles.weekDayName}>{weekDayName}</Text>
            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>}
>>>>>>> aace6070b8f123c1d7cc19191c72631d110f0f9b
            />
        </SafeAreaView>
    );
}
