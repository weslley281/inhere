import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
});