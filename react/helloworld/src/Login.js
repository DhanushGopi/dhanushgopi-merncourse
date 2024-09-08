import { useState } from "react";
import { useS }

function Login() {
        const [loginemail, setLoginemail] = useState();
        const [loginpswd, setLoginpswd] = useState();

        return (
            <div className="loginform">
                <p className="formlabel">Login</p>
                <input type="email" className="emailfield" />
                <input type="password" className="pswdfield" />
                <input type="submit" className="submit" />
            </div>
        );
    }

export default Login;