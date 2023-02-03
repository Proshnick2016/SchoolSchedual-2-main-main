import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, AsyncStorage } from "react-native";
import SchedualRendering from "../components/SchedualRendering";
import schedualPageStyles from "../styles/schedualPageStyles"
import schedualStyles from "../styles/schedualStyles";

export default function Schedual() {
    const [weekDayArray, setWeekDayArray] = React.useState();
    const [geted, setGeted] = React.useState(false)

    React.useEffect(() => {
        async function getAsyncStorageData() {
            const schedualFromAsyncStorage = await AsyncStorage.getItem('Schedual');
            setWeekDayArray(JSON.parse(schedualFromAsyncStorage)['Понедельник']);
            setGeted(true)
        }
        if (geted === false) {
            getAsyncStorageData();
        }
    });

    return (
        <View style={schedualStyles.container}>
            <Text style={schedualStyles.weekDayName}>Понедельник</Text>

            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>
            }
            />
            <Text style={schedualStyles.weekDayName}>Понедельник</Text>

            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>
            }
            /><Text style={schedualStyles.weekDayName}>Понедельник</Text>

            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>
            }
            /><Text style={schedualStyles.weekDayName}>Понедельник</Text>

            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>
            }
            /><Text style={schedualStyles.weekDayName}>Понедельник</Text>

            <FlatList data={weekDayArray} renderItem={({ item }) =>
                <View style={schedualStyles.item}>
                    <Text> {item.lessonNumber} {item.lessonName} {item.lessonTime}</Text>
                </View>
            }
            />

        </View>
    );
}
// style={schedualStyles.item}