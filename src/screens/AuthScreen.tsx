import React, { useEffect, useContext } from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native'
import { signin } from '../lib/firebase'
import { UserContext } from '../contexts/userContxst'

export const AuthScreen: React.FC = () => {
    const { setUser } = useContext(UserContext)

    // 初回の一回目のみ呼び出しの場合は第二引数に空
    useEffect(() => {
        const fetchUser = async () => {
            const user = await signin()
            setUser(user)
        }
        fetchUser()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size='large' />
            <Text style={styles.text}>ログイン中...</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginTop: 16,
        fontSize: 12,
        color: "#888",
    },
})