import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Logout(){
    const auth = getAuth()
    const navigate = useNavigate()
    
    async function handleLogout(e){
        e.preventDefault();
        try {
            await signOut(auth);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return <div>
        <h1>Are you sure you want to logout</h1>
        <button onClick={(e) => {handleLogout(e)}}>Logout</button>
    </div>
}