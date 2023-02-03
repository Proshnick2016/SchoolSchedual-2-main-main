import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import HomePage from "./pages/HomePage";
import Schedual from "./pages/Schedual";
import schedualStyles from "./styles/schedualStyles";

export default function App() {
  return (
    <SafeAreaView style={schedualStyles.container}>
      <Schedual />
      <StatusBar theme="auto" />
    </SafeAreaView>
  );
}

