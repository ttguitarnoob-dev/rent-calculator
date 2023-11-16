export default function Total({ data }) {


    function calculateTotal() {
        let totalOwed = 0
        let totalPaid = 0

        for (let i = 0; i < data.owes.length; i++) {
            totalOwed = totalOwed + data.owes[i].amount
        }

        for (let i = 0; i < data.pays.length; i++) {
            totalPaid = totalPaid + data.pays[i]
        }
        return totalOwed - totalPaid
    }


    return (
        <div>
            <h1>Total Remaining: {calculateTotal()}</h1>
        </div>
    )
}