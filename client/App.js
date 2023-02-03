import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
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

