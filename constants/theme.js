import { Dimensions } from "react-native";
const { width, height } = Dimensions.get(window);

export const COLORS = {
    primary: "#45BA73",
    secondary: "#F2F2F2",

    lightgreen: "#A2DC89",
    grey: "#C7C7C7",
    black: "#191C32",
    red: "#FF4134"
};

export const SIZES = {
    //global sizes
    padding1: 12,
    padding2: 10,
    radius: 8,

    //font sizzes
    large: 34,
    h1: 32,
    h2: 24,
    h3: 20,
    sub: 14, //medium
    body1: 16,
    body2: 14,
    body3: 12,

    //app dimensions
    width,
    height,
};

export const FONTS = {
    large: { fontFamily: "Roboto-Bold", fontSize: SIZES.large }
    h1: { fontFamily: "Roboto-Medium", fontSize: SIZES.h1 }
    h2: { fontFamily: "Roboto-Medium", fontSize: SIZES.h2 }
    h3: { fontFamily: "Roboto-Medium", fontSize: SIZES.h3 }
    sub: { fontFamily: "Roboto-Medium", fontSize: SIZES.sub }
    body1: { fontFamily: "Roboto-Reguler", fontSize: SIZES.body1 }
    body2: { fontFamily: "Roboto-Reguler", fontSize: SIZES.body2 }
    body3: { fontFamily: "Roboto-Reguler", fontSize: SIZES.body3 }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;