import { useState } from 'react';
function Home() {
    const [address, setAddress] = useState('Your Address');
    const [email, setEmail] = useState('Your Email');
    const valEmail = () => {
        if (email.length === 0) {
            alert("Email is empty");
        }
        else {
            alert("Email updated Successfully");
        }
    };
    return (
        <div>
            <h1>This from home.</h1>
            <p>Your email is {email}</p>
            <p>Your email is {address}</p>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" id="address" onChange={(add) => setAddress(add.target.value)} />
            <input type="submit" id="submit" onClick={() => valEmail()} />
        </div>
    )
};

export default Home;