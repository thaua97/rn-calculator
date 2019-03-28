import React from 'react'
import { View, Text } from 'react-native'
import Styles from './style'

export default props => 
    <View style={Styles.display}>
        <Text 
            numberOfLines={1} 
            style={Styles.display__value}
        >{props.value}</Text>
    </View>