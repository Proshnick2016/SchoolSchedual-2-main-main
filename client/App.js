import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import HomePage from "./pages/HomePage";
import Schedual from "./pages/Schedual";

export default function App() {
  return (
    <View>
      <Schedual />
      <StatusBar theme="auto" />
    </View>
  );
}
