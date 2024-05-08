import {useState} from "react"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export function Register(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth()
    
    async function handleRegistration(){
        // alert(email + ": " + password)
        createUserWithEmailAndPassword(auth,email,password)
        .then((user) => {
            // Success
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return <div>
    <h1>This is the register page</h1>
    <form action="">
        <input onChange={(e) => {setEmail(e.target.value)}} type="test" placeholder="Email"/>
        <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password"/>
        <button onClick= {() => {handleRegistration()}}>Register</button>
    </form>
    
    </div>
}