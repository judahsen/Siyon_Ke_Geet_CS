import { createContext,useState,useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function AuthContext({children}){
    const auth = getAuth();
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        let unsubscribe;
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setLoading(false)
           if(currentUser) setUser(currentUser)

        })
    })
}