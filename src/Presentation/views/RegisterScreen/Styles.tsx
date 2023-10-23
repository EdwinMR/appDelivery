import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '72%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 30
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoTex: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft: 15
    },
    forgotePassword: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    textForgote: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },
    loading:{
        position:'absolute',
        bottom:0,
        top:0,
        right:0,
        left:0
    }
});

export default RegisterStyles;