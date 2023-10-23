import { Dimensions, StyleSheet } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const MenuAuthStyles = StyleSheet.create({
    slideImage: {
        width: "100%",
        height: windowHeight * 0.5,
        borderRadius: 10,
    },
    title: {
        fontSize: 60
    },
    subtitle: {
        fontSize: 25
    }
});

export default MenuAuthStyles;