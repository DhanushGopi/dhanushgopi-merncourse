export default function UserList() {

    async function getvalone(one) {
        console.log(one)
        const valone = await fetch("https://reqres.in/api/users?page=1");
        console.log(valone);
    }

    async function getvaltwo() {
        const valtwo = await fetch("https://reqres.in/api/users?page=2");
        console.log(valtwo);
    }

    async function getvalthree() {
        const valthree = await fetch("https://reqres.in/api/users?page=3");
        console.log(valthree);
    }

    async function getvalfour() {
        console.log(await fetch("https://reqres.in/api/users?page=4"));
    }

    return (
        <div>
            <h1>UserList</h1>
            <select ClassName="dropdown">
                <option value="1" onChange={getvalone}>1 one </option>
                <option value="2" onChange={getvaltwo}>2 two</option>
                <option value="3" onChange={getvalthree}>3 three</option>
                <option value="4" onChange={getvalfour}>4 four</option>
            </select>
        </div >
    )
}