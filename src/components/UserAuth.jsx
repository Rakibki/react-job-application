import { createContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth"
import auth from "../firebase/firebase.init" 

export const useUserAuth = createContext(null)

const UserAuth = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            const dishConnect = setUser(currentUser);
            console.log("user Change");
            return () => {
                dishConnect()
            }
        })
    }, [])


    const GoogleProvider = new GoogleAuthProvider();
    const singInWithGoogle = () => {
       return signInWithPopup(auth, GoogleProvider);
    }

    const GithubProvider = new GithubAuthProvider()
    const singInWidthGithub = () => {
       return signInWithPopup(auth, GithubProvider)
    }

    const userInfo = {user, singInWidthGithub, singInWithGoogle, logInUser, createUser}
  return (
    <div>
        <useUserAuth.Provider value={userInfo}>
            {children}
        </useUserAuth.Provider>
    </div>
  )
}

export default UserAuth