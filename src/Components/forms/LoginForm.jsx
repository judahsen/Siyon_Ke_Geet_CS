import {useState} from "react"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export function LoginForm(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth()
    const navigate = useNavigate()
    
    async function handleLogin(e){
        e.preventDefault();
        // alert(email + ": " + password)
        signInWithEmailAndPassword(auth,email,password)
            .then((user) => {
                // Success
                
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                alert("Try Again Please")
                console.error(error)
            })
    }

    return <div>
    <h1>This is the Login page</h1>
    <form action="#">
        <input onChange={(e) => {setEmail(e.target.value)}} type="Email" placeholder="Email"/>
        <input onChange={(e) => {setPassword(e.target.value)}} type="Password" placeholder="Password"/>
        <button onClick= {(e) => {handleLogin(e)}}>Login</button>
        <Nav.Link href="/register">Register a new account ?</Nav.Link>
        
    </form>
    
    </div>
}