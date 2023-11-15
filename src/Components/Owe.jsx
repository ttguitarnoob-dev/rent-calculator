
export default function Owe({ data }) {



    if (!data) return <div>
        <h1>Loading Rent Data</h1>
    </div>



    return (
        <div>
            <h1>Owee</h1>
            {data.owes && data.owes.map((oneItem, index) => (
                <p key={index}>{oneItem.month}: ${oneItem.amount}</p>
            ))}
        </div>
    )
}