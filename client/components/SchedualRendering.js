import React from "react";
import { View, Text, FlatList, AsyncStorage } from "react-native";
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
        <View>
            <Text style={schedualStyles.weekDayName}>{weekDayName}</Text>
            <FlatList data={weekDayArray} renderItem={({ item }) => <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>} />
        </View>
    );
}
