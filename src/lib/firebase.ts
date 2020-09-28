import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
import Constants from 'expo-constants';
/* types */
import { Shop } from '../types/shop';
import { initialUser, User } from '../types/user'


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

export const signin = async () => {
    const userCredential = await firebase.auth().signInAnonymously()
    const { uid } = userCredential.user
    const userDoc = await firebase.firestore().collection('users').doc(uid).get()
    if (!userDoc.exists) {
        await firebase.firestore().collection('users').doc(uid).set(initialUser)
        return {
            ...initialUser,
            id: uid
        } as User
    } else {
        return {
            id: uid,
            // userDoc.data()にはuidが含まれないため、上記でuidだけ別でセット
            ...userDoc.data()
        } as User
    }
}