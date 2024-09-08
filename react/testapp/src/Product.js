export default function Product() {

    async function getName() {
        const names = await fetch("https://api.restful-api.dev/objects");
        console.log(names);

    }
    return (
        <div>
            <h1>Product Page</h1>
            <input type="submit" onClick={getName} />
        </div>
    )
}