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
} from "react-native";
import { SIZES, COLORS, images, gif } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
// import DatePicker from "react-native-datepicker";

const CreateTeam = ({ navigation }) => {
  const [date, setDate] = useState(date);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        </View>
        <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 246 }}>
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
