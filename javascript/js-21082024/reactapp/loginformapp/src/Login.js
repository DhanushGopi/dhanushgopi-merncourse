import { useState } from "react";

function Login() {
    const [loginemail, setLoginemail] = useState('ex: abc@example.com');
    const [loginpswd, setLoginpswd] = useState('ex: example123');

    const loginValidate = () => {
        alert("Login is triggering");
        if (loginemail === '') {
            alert("eamil is empty");
        } else if (loginpswd === '') {
            alert("password is empty");
        } else {
            alert("Value have been accepted")
        }
    };

    return (
        <div className="loginform">
            <div>
                <p>Your Email is : {loginemail}</p>
                <p>Your Password is : {loginpswd}</p>
            </div>
            <p className="formlabel">Login</p>
            <input type="text" className="emailfield" onChange={(e) => setLoginemail(e.target.value)} />
            <input type="text" className="pswdfield" onChange={(pswd) => setLoginpswd(pswd.target.value)} />
            <input type="submit" className="submit" onClick={loginValidate} />
        </div>
    );
}

export default Login;