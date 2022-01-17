import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SIZES, COLORS, icons, images } from "../constants";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
// import SweetAlert from "react-native-sweet-alert";
// import swal from "sweetalert";

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Kode eksemplar ${data}\nBerhasil Terdata ✅`);
    // SweetAlert.showAlertWithOptions(
    //   {
    //     title: "",
    //     subTitle: "",
    //     // confirmButtonTitle: "OK",
    //     // confirmButtonColor: "#000",
    //     otherButtonTitle: "Cancel",
    //     otherButtonColor: "#dedede",
    //     style: "success",
    //     cancellable: true,
    //   },
    //   (callback) => console.log("callback")
    // );
  };

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  // function renderModal() {
  //   return (
  //     <View>
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={modalVisible}
  //         onRequestClose={() => setModalVisible(!modalVisible)}
  //       >
  //         <View
  //           style={{
  //             flex: 1,
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <View
  //             style={{
  //               height: 237,
  //               width: 303,
  //               backgroundColor: COLORS.white,
  //               borderRadius: SIZES.radius,
  //               paddingTop: 14,
  //               alignItems: "center",
  //               shadowColor: "#838383",
  //               shadowOffset: {
  //                 width: 0,
  //                 height: 2,
  //               },
  //               shadowOpacity: 0.25,
  //               shadowRadius: 4,
  //               elevation: 5,
  //             }}
  //           >
  //             <Text
  //               style={{
  //                 color: COLORS.black,
  //                 fontSize: 22,
  //                 fontFamily: "Roboto",
  //                 fontWeight: "bold",
  //               }}
  //             >
  //               Gabung Tim
  //             </Text>
  //             <View style={{ maxWidth: 225, marginTop: 11 }}>
  //               <Text style={{ fontSize: SIZES.body1, textAlign: "center" }}>
  //                 Masukkan kode undangan yang Anda terima dari rekan Anda.
  //               </Text>
  //             </View>
  //             <TextInput
  //               style={{
  //                 borderColor: COLORS.grey,
  //                 borderWidth: 1,
  //                 height: 58,
  //                 width: 246,
  //                 borderRadius: 6,
  //                 marginTop: 11,
  //                 fontSize: SIZES.h3,
  //                 paddingLeft: 12,
  //                 paddingRight: 12,
  //               }}
  //               maxLength={5}
  //               placeholder="Kode"
  //               keyboardType="numeric"
  //             />
  //             <View
  //               style={{
  //                 marginTop: 12.5,
  //                 width: 241,
  //                 flexDirection: "row",
  //                 justifyContent: "space-between",
  //               }}
  //             >
  //               <TouchableOpacity
  //                 style={{
  //                   height: 50,
  //                   width: 116,
  //                   backgroundColor: COLORS.secondary,
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   borderRadius: SIZES.radius,
  //                 }}
  //                 onPress={() => setModalVisible(!modalVisible)}
  //               >
  //                 <Text style={{ color: COLORS.primary, fontSize: SIZES.h3 }}>
  //                   Batal
  //                 </Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity
  //                 style={{
  //                   height: 50,
  //                   width: 116,
  //                   backgroundColor: COLORS.primary,
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   borderRadius: SIZES.radius,
  //                 }}
  //                 onPress={() => navigation.navigate("Beranda")}
  //               >
  //                 <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
  //                   Lanjut
  //                 </Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {renderModal()} */}
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
        <TouchableOpacity
          onPress={() => navigation.navigate("TambahBuku")}
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
        </TouchableOpacity>
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
