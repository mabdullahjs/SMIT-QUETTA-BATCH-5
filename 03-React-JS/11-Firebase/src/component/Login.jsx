import React, { useState } from 'react'
import { auth } from '../config/firebaseConfig.js'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
              console.log(user)
              console.log('login successfully')
            })
            .catch((error) => {
             console.log(error)
            });
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login