import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SIZES, COLORS, icons, images } from "../constants";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`${data}\nScanning Barcode Berhasil ✅`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={{
          position: "absolute",
          top: 90,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Beranda")}>
          <Ionicons name="close" size={36} color={COLORS.white} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SIZES.h3,
            color: COLORS.white,
            fontWeight: "bold",
            marginLeft: 80,
          }}
        >
          Scan Barcode
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          top: 565,
          left: 57,
          paddingVertical: 10,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          paddingHorizontal: 10,
          opacity: 0.7,
        }}
      >
        <Text style={{ color: COLORS.black, fontSize: SIZES.body2 }}>
          Ketuk Layar Untuk Memfokuskan Kamera
        </Text>
      </View>

      {/* "#f3f3f3" */}
      <View
        style={{
          backgroundColor: "#f3f3f3",
          height: 160,
          position: "relative",
          top: 270,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
          }}
        >
          Arahkan Kamera ke Barcode
        </Text>
        {scanned && (
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 60,
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: COLORS.white,
              flexDirection: "row",
              borderRadius: SIZES.radius,
            }}
            onPress={() => setScanned(false)}
          >
            <MaterialCommunityIcons
              name="barcode-scan"
              size={24}
              color={COLORS.primary}
            />
            <Text
              style={{
                fontSize: SIZES.body1,
                marginLeft: 10,
                color: COLORS.primary,
                fontWeight: "bold",
              }}
            >
              Scan lagi
            </Text>
          </TouchableOpacity>
        )}
        <View
          style={{ marginTop: 75, flexDirection: "row", alignItems: "center" }}
        >
          <Feather name="edit" size={24} color={COLORS.black} />
          <Text
            style={{
              fontSize: SIZES.body1,
              marginLeft: 7,
              color: COLORS.black,
            }}
          >
            Tulis Manual
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
