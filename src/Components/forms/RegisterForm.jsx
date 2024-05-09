import {useState} from "react"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export function RegisterForm(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth()
    
    async function handleRegistration(e){
        e.preventDefault();
        // alert(email + ": " + password)
        createUserWithEmailAndPassword(auth,email,password)
            .then((user) => {
                // Success
                alert("User created")
                console.log(user)
            })
            .catch((error) => {
                alert("Try Again Please")
                console.log(error)
            })
    }

    return <div>
    <h1>This is the register page</h1>
    <form action="#">
        <input onChange={(e) => {setEmail(e.target.value)}} type="Email" placeholder="Email"/>
        <input onChange={(e) => {setPassword(e.target.value)}} type="Password" placeholder="Password"/>
        <button onClick= {(e) => {handleRegistration(e)}}>Register</button>
    </form>
    
    </div>
}