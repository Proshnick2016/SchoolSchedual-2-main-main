import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import Schedual from "./pages/Schedual";

export default function App() {
  return (
    <View>
      <Schedual />
      <StatusBar theme="auto" />
    </View>
  );
}
