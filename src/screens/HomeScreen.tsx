import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
/* lib */
import { getShops } from '../lib/firebase'
/* components */
import { ShopReviewItem } from '../components/ShopReviewItem'
/* types */
import { Shop } from '../types/shop';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation'

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

export const HomeScreen = ({ navigation }: Props) => {
    const [shops, setShops] = useState<Shop[]>([])

    useEffect(() => {
        getFirebaseItems();
    }, []) //第二引数で変更のタイミングを指定。空の配列は画面マウント時の一度のみ実行。

    // 非同期で実行する場合はasyncを利用する
    const getFirebaseItems = async () => {
        const shops = await getShops()
        setShops(shops)
    }

    const onPressShop = (shop: Shop) => {
        // 第一引数：name 第二引数：画面遷移時に渡すパラメータ
        navigation.navigate('Shop', { shop })
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={shops}
                renderItem={({ item }: { item: Shop }) => (
                    <ShopReviewItem shop={item} onPress={() => onPressShop(item)} />
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
