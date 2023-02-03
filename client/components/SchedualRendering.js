import React from "react";
import { Text, FlatList, AsyncStorage, SafeAreaView, View } from "react-native";
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
        <SafeAreaView style={schedualStyles.container}>
            <Text style={schedualStyles.weekDayName}>{weekDayName}</Text>
            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>}
            />
        </SafeAreaView>
    );
}
