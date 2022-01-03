import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS, SIZES, images } from "../constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Tipe keanggotaan", value: 1 },
    { label: "Pustakawan Senior", value: 2 },
    { label: "Pustakawan", value: 3 },
    { label: "Staff", value: 4 },
  ];

  function dropDownComponent() {
    const [value, setValue] = useState(null);

    return (
      <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: COLORS.primary }]}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={220}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Tipe Keanggotaan" : "..."}
          placeholderStyle={styles.placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <Ionicons name="md-chevron-down" size={24} color={COLORS.grey} />
          )}
        />
      </View>
    );
  }

  function formSignUp() {
    return (
      <View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
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
            placeholder="Nama lengkap"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
          />
        </View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
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
            placeholder="Nama pengguna"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
          />
        </View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
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
            placeholder="Alamat surel"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
          />
        </View>
        <View>{dropDownComponent()}</View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
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
            placeholder="Kata sandi"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 5,
              bottom: 10,
              height: 48,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Feather name="eye-off" size={24} color={COLORS.grey} />
            ) : (
              <Feather name="eye" size={24} color={COLORS.grey} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
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
            placeholder="Ketik ulang kata sandi"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 5,
              bottom: 10,
              height: 48,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Feather name="eye-off" size={24} color={COLORS.grey} />
            ) : (
              <Feather name="eye" size={24} color={COLORS.grey} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function okeBtn() {
    return (
      <TouchableOpacity
        style={{
          height: 55,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => console.log("Oke")}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Oke
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? null : "position"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={{ marginTop: 47, marginHorizontal: SIZES.padding2 * 2 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Open")}>
            <Ionicons name="close" size={36} color={COLORS.black} />
          </TouchableOpacity>
          <View style={{ marginTop: 37 }}>
            <Text
              style={{
                fontSize: SIZES.h1,
                fontFamily: "Roboto",
                color: COLORS.black,
              }}
            >
              Daftarkan Diri Anda
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 13 }}>
            <Image
              source={images.avatar}
              resizeMode="contain"
              style={{ width: 82 }}
            />
          </View>
          <View style={{ marginTop: SIZES.padding1 }}>{formSignUp()}</View>
          <View style={{ marginTop: 20 }}>{okeBtn()}</View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderColor: COLORS.grey,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    height: 50,
    paddingLeft: 20,
    paddingRight: 5,
    marginBottom: SIZES.padding2 * 2,
  },
  placeholder: {
    color: COLORS.grey,
  },
  selectedTextStyle: {
    color: COLORS.primary,
    fontSize: SIZES.body1,
  },
});

export default SignUp;
