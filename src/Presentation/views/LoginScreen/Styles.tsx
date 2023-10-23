import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
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
        height: '50%',
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
        top: '15%'
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
    registerUser: {
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
        marginLeft: 10,
        fontSize: 12,
        marginTop: 15
    },
    forgotePassword: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5
    },
    textRegister: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },
});

export default LoginStyles;