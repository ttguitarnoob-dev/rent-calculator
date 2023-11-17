
export default function Owe({ data }) {



    // if (!data) return <div>
    //    <Spinner label="Loading..." color="warning" />
    // </div>



    return (
        <div>
            <h1>Owed</h1>
            {data.owes && data.owes.map((oneItem, index) => (
                <p key={index}>{oneItem.month}: ${oneItem.amount}</p>
            ))}
        </div>
    )
}