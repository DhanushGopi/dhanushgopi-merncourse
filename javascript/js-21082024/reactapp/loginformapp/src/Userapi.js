import { useState } from 'react';

function Userapi() {
    async function userapicall() {
        const apiurl = await fetch("https://reqres.in/api/users?page=2");
        console.log(apiurl);
    }

    return (
        <div>
            <input type="submit" className='fetchuser' value='fetch' onClick={userapicall} />
        </div>
    )
}

export default Userapi;