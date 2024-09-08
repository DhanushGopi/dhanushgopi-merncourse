import { useState } from "react";

export default function Userlist() {

    const [userlist, setUserlist] = useState([]);
    async function getData() {
        let resp = await fetch("https://reqres.in/api/users?page=1", { method: "GET" });
        let json = await resp.json();
        setUserlist(json['data'])

    }

    return (
        <div>
            <button onClick={() => getData()}>Click</button>
            {
                userlist.map((obj, index) => {
                    return (<div>
                        <p>
                            Name: {obj.first_name}, Email:{obj.email}
                        </p>
                    </div>)
                })
            }
        </div>
    )
}