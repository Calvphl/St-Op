import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Platform,
} from "react-native";
import { SIZES, COLORS, images, gif } from "../constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateTeam = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [dateSelesai, setDateSelesai] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [modeSelesai, setModeSelesai] = useState("dateSelesai");
  const [show, setShow] = useState(false);
  const [showSelesai, setShowSelesai] = useState(false);
  const [text, setText] = useState("Tanggal Mulai");
  const [textSelesai, setTextSelesai] = useState("Tanggal Selesai");

  //Tanggal Mulai
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    // let fTime =
    //   "Hours" + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();

    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  //Tanggal Selesai
  const onChangeSelesai = (eventSelesai, selectedDateSelesai) => {
    const currentDateSelesai = selectedDateSelesai || dateSelesai;
    setShowSelesai(Platform.OS === "ios");
    setDateSelesai(currentDateSelesai);

    let tempDateSelesai = new Date(currentDateSelesai);
    let fDateSelesasi =
      tempDateSelesai.getDate() +
      "/" +
      (tempDateSelesai.getMonth() + 1) +
      "/" +
      tempDateSelesai.getFullYear();

    // let fTime =
    //   "Hours" + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();

    setTextSelesai(fDateSelesasi);

    console.log(fDateSelesasi);
  };

  const showModeSelesai = (currentModeSelesasi) => {
    setShowSelesai(true);
    setMode(currentModeSelesasi);
  };

  const showDatepickerSelesai = () => {
    showModeSelesai("dateSelesai");
  };

  // const showTimepicker = () => {
  //   showMode("time");
  // };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function pilihTanggalMulai() {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.grey,
          width: 170,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.radius,
        }}
      >
        {/* <View> */}
        <TouchableOpacity
          onPress={showDatepicker}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: SIZES.body1, marginRight: 7 }}>{text}</Text>
          <AntDesign name="calendar" size={26} color={COLORS.primary} />
        </TouchableOpacity>
        {/* </View> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  }

  function pilihTanggalSelesai() {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.grey,
          width: 170,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.radius,
        }}
      >
        {/* <View> */}
        <TouchableOpacity
          onPress={showDatepickerSelesai}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: SIZES.body1, marginRight: 7 }}>
            {textSelesai}
          </Text>
          <AntDesign name="calendar" size={26} color={COLORS.primary} />
        </TouchableOpacity>
        {/* </View> */}
        {showSelesai && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeSelesai}
          />
        )}
      </View>
    );
  }

  function headerComponent() {
    return (
      <View
        style={{
          paddingBottom: SIZES.padding2 + 5,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grey,
        }}
      >
        <View
          style={{
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Tim")}>
            <Ionicons name="close" size={36} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function formTeam() {
    return (
      <View>
        <TextInput
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            marginVertical: SIZES.padding,
            borderColor: COLORS.grey,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            height: 50,
            color: COLORS.primary,
            fontFamily: "Roboto",
            fontSize: 16,
            marginBottom: SIZES.padding2 * 2,
          }}
          placeholder="Nama tim"
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.primary}
        />
        <TextInput
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingTop: 20,
            borderColor: COLORS.grey,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            height: 139,
            color: COLORS.primary,
            fontFamily: "Roboto",
            fontSize: 16,
            marginBottom: SIZES.padding2 * 2,
          }}
          placeholder="Catatan"
          maxLength={300}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.primary}
          multiline={true}
          numberOfLines={10}
          textAlignVertical="top"
        />
      </View>
    );
  }

  function selanjutnyaBtn() {
    return (
      <TouchableOpacity
        style={{
          height: 55,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={toggleModal}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Buat Tim
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? null : "position"}
        style={{ flex: 1 }}
      >
        {/* <View style={{ marginTop: 47 }}>{headerComponent()}</View> */}
        <View
          style={{
            marginTop: 120,
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              maxWidth: 166,
              fontSize: SIZES.h2,
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: COLORS.black,
            }}
          >
            Buat Profil Tim Kamu
          </Text>
          <Image
            source={images.grup}
            resizeMode="contain"
            style={{ width: 99 }}
          />
        </View>
        <View style={{ marginTop: 38, marginHorizontal: SIZES.padding2 * 2 }}>
          {formTeam()}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {pilihTanggalMulai()}
            {pilihTanggalSelesai()}
          </View>
        </View>
        <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 200 }}>
          {selanjutnyaBtn()}
        </View>
        <Modal
          isVisible={isModalVisible}
          animationIn="fadeIn"
          animationOut="fadeOut"
          hasBackdrop={false}
          backdropColor="black"
          backdropOpacity={0.8}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: "white",
              justifyContent: "center",
              // alignItems: "center",
              borderRadius: 12,
            }}
          >
            <View style={{ marginTop: 40, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.h3,
                  fontWeight: "bold",
                  textAlign: "center",
                  // marginTop: 10,
                }}
              >
                Berhasil Membuat dan Menambahkan Tim
              </Text>
              <Image
                source={gif.buatTim}
                resizeMode="contain"
                style={{
                  width: 80,
                  position: "absolute",
                  bottom: -170,
                  left: 110,
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Beranda")}
              // onPress={toggleModal}
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: 20,
              }}
            >
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}>
                Oke
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreateTeam;
