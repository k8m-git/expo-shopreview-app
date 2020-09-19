import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* lib */
import { getShops } from './src/lib/firebase'
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

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ))
  return (
    <View style={styles.container}>
      {shopItems}
    </View>
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
