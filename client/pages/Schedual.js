import React, { useState } from "react";
<<<<<<< HEAD
import { View, ScrollView } from "react-native";
import SchedualRendering from "../components/SchedualRendering";
=======
import { SafeAreaView, View, Text, FlatList, AsyncStorage } from "react-native";
import SchedualRendering from "../components/SchedualRendering";
import schedualPageStyles from "../styles/schedualPageStyles"
>>>>>>> aace6070b8f123c1d7cc19191c72631d110f0f9b
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
<<<<<<< HEAD
        <View>
            <ScrollView>
                <View style={schedualStyles.item}>
                    <SchedualRendering weekDayName={'Понедельник'} />
                </View>
                <View style={schedualStyles.item}>
                    <SchedualRendering weekDayName={'Вторник'} />
                </View>
                <View style={schedualStyles.item}>
                    <SchedualRendering weekDayName={'Среда'} />
                </View>
                <View style={schedualStyles.item}>
                    <SchedualRendering weekDayName={'Четверг'} />
                </View>
                <View style={schedualStyles.item}>
                    <SchedualRendering weekDayName={'Пятница'} />
                </View>
            </ScrollView>
        </View>
    );
}
=======
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
>>>>>>> aace6070b8f123c1d7cc19191c72631d110f0f9b
