import firebase from 'firebase';

export type User = {
    // ?を付けて任意の値に設定
    id?: string
    name: string
    updatedAt: firebase.firestore.Timestamp
    createdAt: firebase.firestore.Timestamp
}

export const initialUser: Ueer = {
    name: '',
    updatedAt: firebase.firestore.Timestamp.now(),
    createdAt: firebase.firestore.Timestamp.now()
}