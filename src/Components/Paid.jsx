
export default function Paid({ data }) {



    if (!data) return <div>
        <h1>Loading Paid Data</h1>
    </div>



    return (
        <div>
            <h1>Paid</h1>
            {data.pays && data.pays.map((oneItem, index) => (
                <p key={index}>Paid: ${oneItem}</p>
            ))}
        </div>
    )
}