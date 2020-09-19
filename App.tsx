import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
/* lib */
import { getShops } from './src/lib/firebase'
/* components */
import { ShopReviewItem } from './src/components/ShopReviewItem'
/* types */
import { Shop } from './src/types/shop';

export default function App() {
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems();
  }, []) //第二引数で変更のタイミングを指定。空の配列は画面マウント時の一度のみ実行。

  // 非同期で実行する場合はasyncを利用する
  const getFirebaseItems = async () => {
    const shops = await getShops()
    setShops(shops)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => <ShopReviewItem shop={item} />}
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
