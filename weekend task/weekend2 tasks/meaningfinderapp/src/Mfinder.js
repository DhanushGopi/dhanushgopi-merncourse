import React, { useState } from 'react';

export default function Mfinder() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(100);

    const getText = (event) => {
        setName(event.target.value);
    }

    const getAge = async () => {

        const resp = await fetch(`https://api.agify.io/?name=${name}`);
        const respjson = await resp.json();
        const respage = respjson.age;
        setAge(respage);
    }
    return (
        <div className='finder'>
            <p className='finderlabel'>Find the age by your Name</p>
            <input type="text" className="findertext" onChange={getText} placeholder='Enter your Name' />
            <input type="button" className="finderbtn" onClick={getAge} value="Find your age" />
            <p className='finderout'><i>"your age is {age}. Just, because your name is {name}"</i></p>
        </div>
    )
}