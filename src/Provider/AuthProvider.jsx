import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import AuthContext from "./AuthContext";
import { CgPassword } from "react-icons/cg";
import { useEffect, useState } from "react";
 const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [User,setUser]=useState(null)

    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    console.log(User);

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(curresntUser)=>{
            setUser(curresntUser);
        })
        return ()=>{
            unsub();
        }
    },[])
    const authData={
        User,
        setUser,
        createUser,
        auth,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
    
};

export default AuthProvider;