import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CarouselStyles = StyleSheet.create({
    slide: {
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.5,
        borderRadius: 10,
    },
    slideTitle: { 
        fontSize: 24 
    },
    slideSubtitle: { 
        fontSize: 18 
    },
    pagination: {
        position: "absolute",
        bottom: 50,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    button: {
        position: "absolute",
        bottom: 0
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: { 
        backgroundColor: "blue" 
    },
    paginationDotInactive: { 
        backgroundColor: "gray" 
    },
    carousel: { 
        height: "80%" 
    },
    containerButtons:{
        alignItems: 'center', 
        width: "100%",
    },
    containerButton:{
        width:"90%"
    }
})

export default CarouselStyles;