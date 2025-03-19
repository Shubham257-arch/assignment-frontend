import React, {useState} from "react";
import axios from "axios";

const Login = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:8000/api/login/",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email,
                password,
            },
        }

        axios.request(config)
            //success
            .then(response => {
                // console.log(JSON.stringify(response.data));
                setUser(response.data.user);
                localStorage.setItem("token", response.data.token);
            })
            //fail
            .catch(function (error) {
                console.log("failed : ", error);
            })
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
