import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
/* types */
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'User'>
    route: RouteProp<RootStackParamList, 'User'>
}

export const UserScreen: React.FC<Props> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>User</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    }
})