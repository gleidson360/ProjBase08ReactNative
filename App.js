import React, { useEffect, useState } from "react";
import { Text, StatusBar, Pressable } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BarCodeScanner } from "expo-barcode-scanner";

import styles from "./AppStyle";

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
    <LinearGradient colors={["#232526", "#414345"]} style={styles.tela}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Pressable
        onPress={function () {
          estadoEscaneado(false);
        }}
      >
        <Text  style={styles.texto}> Escanear novamente </Text>
      </Pressable>
      
      <BarCodeScanner onBarCodeScanned={ Escanear }   style={styles.camera}/>

    </LinearGradient>
  );
}

