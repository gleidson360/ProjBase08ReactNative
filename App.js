import React, { useEffect, useState } from "react";
import { Text, StatusBar, Pressable } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [escaneado, estadoEscaneado] = useState(false);

  async function ObterPermissao() {
    await BarCodeScanner.requestPermissionsAsync();
  }

  function Escanear({ type, data }) {
    estadoEscaneado(true);
    alert(data);
  }

  useEffect(function () {
    ObterPermissao();
  }, []);

  return (
    <LinearGradient colors={["#232526", "#414345"]}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
