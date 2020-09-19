import * as firebase from 'firebase';
import "firebase/firestore";
import Constants from 'expo-constants';
/* types */
import { Shop } from '../types/shop';


if (!firebase.apps.length) { // ホットリロード時のエラー対策
    // app.jsonの"extra"を参照
    firebase.initializeApp(Constants.manifest.extra.firebase);
}

// 非同期で実行する場合はasyncを利用する
export const getShops = async () => {
    const snapshot = await firebase.firestore().collection('shops').get()
    const shops = snapshot.docs.map(doc => doc.data() as Shop)
    return shops;
}