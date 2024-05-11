import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export function RegisterForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth()

    async function handleRegistration(e) {
        e.preventDefault();
        // alert(email + ": " + password)
        createUserWithEmailAndPassword(auth, email, password)
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
        {/* <h1>This is the register page</h1>
    <form action="#">
        <input onChange={(e) => {setEmail(e.target.value)}} type="Email" placeholder="Email"/>
        <input onChange={(e) => {setPassword(e.target.value)}} type="Password" placeholder="Password"/>
        <button onClick= {(e) => {handleRegistration(e)}}>Register</button>
    </form> */}
        <h1>Register for User control</h1>
        <form action="#">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="Email" placeholder="johndoe@example.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="Password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
            </div>

            <button onClick={(e) => { handleRegistration(e) }} type="submit" class="btn btn-primary">Register</button>

        </form>

    </div>
}