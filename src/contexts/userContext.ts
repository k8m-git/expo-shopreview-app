import { createContext } from 'react'
import { User } from '../types/user'

type UserContextValue = {
    user: User | null
    setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextValue>({
    // 初期状態
    user: null,
    setUser: () => { }
})