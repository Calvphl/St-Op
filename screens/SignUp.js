import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  return (
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
    </View>
  );
};

export default SignUp;
