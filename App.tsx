import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";

if (!firebase.apps.length) { // ホットリロード時のエラー対策
  const firebaseConfig = {
    apiKey: "AIzaSyACLmUbhCy9q8RRSlz2B9fNc6E05eZtZ04",
    authDomain: "shop-review-a5c9b.firebaseapp.com",
    databaseURL: "https://shop-review-a5c9b.firebaseio.com",
    projectId: "shop-review-a5c9b",
    storageBucket: "shop-review-a5c9b.appspot.com",
    messagingSenderId: "359950582611",
    appId: "1:359950582611:web:0c46fedd0e4f4a9ac0d7a6",
    measurementId: "G-039F83XREQ"
  };
  firebase.initializeApp(firebaseConfig);
}

type Shop = {
  // TypeScriptでの型定義
  name: string;
  place: string;
}


export default function App() {
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems();
  }, []) //第二引数で変更のタイミングを指定。空の配列は画面マウント時の一度のみ実行。

  // 非同期で実行する場合はasyncを利用する
  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection('shops').get()
    const shops = snapshot.docs.map(doc => doc.data() as Shop)
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
