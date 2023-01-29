import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SchedualRendering from "../components/SchedualRendering";
import schedualPageStyles from "../styles/schedualPageStyles"

export default function Schedual() {
    return (
        <View style={schedualPageStyles.schoolSchedual}>
            <View style={schedualPageStyles.schedualView}>
                <SchedualRendering style={schedualPageStyles.dayStyle} weekDayName={'Понедельник'} />
                <SchedualRendering weekDayName={'Вторник'} />
                <SchedualRendering weekDayName={'Среда'} />
                <SchedualRendering weekDayName={'Четверг'} />
                <SchedualRendering weekDayName={'Пятница'} />
                <SchedualRendering weekDayName={'Суббота'} />
            </View>
        </View>
    );
}