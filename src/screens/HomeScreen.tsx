import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
/* lib */
import { getShops } from '../lib/firebase'
/* components */
import { ShopReviewItem } from '../components/ShopReviewItem'
/* types */
import { Shop } from '../types/shop';

export const HomeScreen = ({ navigation }) => {
    const [shops, setShops] = useState<Shop[]>([])

    useEffect(() => {
        getFirebaseItems();
    }, []) //第二引数で変更のタイミングを指定。空の配列は画面マウント時の一度のみ実行。

    // 非同期で実行する場合はasyncを利用する
    const getFirebaseItems = async () => {
        const shops = await getShops()
        setShops(shops)
    }

    const onPressShop = () => {
        navigation.navigate('Shop')
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={shops}
                renderItem={({ item }: { item: Shop }) => (
                    <ShopReviewItem shop={item} onPress={onPressShop} />
                )}
                keyExtractor={(item, index) => index.toString()}
                // 横二列、縦二列に並べる
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
