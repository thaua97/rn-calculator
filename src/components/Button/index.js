import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import Styles from './style'

export default props => {
    const stylesButton = [Styles.button]
    
    if (props.md) stylesButton.push(Styles.button__medium)
    if (props.lg) stylesButton.push(Styles.button__large)
    if (props.operation) stylesButton.push(Styles.operation__button)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}