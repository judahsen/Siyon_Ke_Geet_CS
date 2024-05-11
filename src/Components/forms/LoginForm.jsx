import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth()
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault();
        // alert(email + ": " + password)
        signInWithEmailAndPassword(auth, email, password)
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
        <h1>Login for User control</h1>
        <form action="#">
            {/* <input onChange={(e) => { setEmail(e.target.value) }} type="Email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
            {/* <input onChange={(e) => { setPassword(e.target.value) }} type="Password" placeholder="Password" /> */}
            {/* <button onClick={(e) => { handleLogin(e) }}>Login</button> */}

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="Email" placeholder="johndoe@example.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="Password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">

                <Nav.Link href="/register">Register a new account ?</Nav.Link>
            </div>
            <button onClick={(e) => { handleLogin(e) }} type="submit" class="btn btn-primary">Login</button>

        </form>

    </div>
}