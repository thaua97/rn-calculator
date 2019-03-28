import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#4C3DB7',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#0B0B20',
        color: '#ffffff'
    },
    operation__button: {
        color: '#fff',
        backgroundColor: '#862D88'
    },
    button__medium: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    button__large: {
        width: (Dimensions.get('window').width / 4) * 3,
    }


})

export default Styles