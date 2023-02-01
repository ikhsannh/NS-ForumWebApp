import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase";

const Signup = () => {
    const [email, setEmail] = useState("");         // kondisi awal 
    const [password, setPassword] = useState("");

    const HandleEmail = (event) => {
        setEmail(event.target.value);
    }

    const HandlePassword = (event) => {
        setPassword(event.target.value);
    }

    // fungsi sign in ke firebase 
    const signUP = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential); // check apakah user sudah terdaftar
            }).catch((error) => {
                console.log(error); // jika belum maka muncul "user not found"
            })
    }


    return (
        <>

            <div className="container text-center mx-auto mt-40">
                <h1>Create Account</h1>

                <form className="mt-5" onSubmit={signUP}>

                    <div className="grid justify-center">
                        <input
                            className="rounded-md w-[15rem] cursor-pointer"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={HandleEmail}
                        />
                        <input
                            className="mt-2 rounded-md w-[15rem] cursor-pointer"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={HandlePassword}
                        />
                    </div>

                    <div className="m-5">
                        <button className="border-2 rounded-lg p-2 mr-2" type="submit">Sign up </button>
                        {/* <button className="p-2 border-2 rounded-lg mr-2" type="submit">Sign in </button>
                        <button className="hidden border-2 rounded-lg" id="logout" type="button">Sign out </button> */}
                    </div>

                </form>
            </div>

        </>
    );
}
export default Signup;