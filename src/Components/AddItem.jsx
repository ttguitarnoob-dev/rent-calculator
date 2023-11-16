import { Input, Button } from "@nextui-org/react";
export default function AddItem({ data, setItem }) {

    let newData = data

    async function handleMonthSubmit(e){
        e.preventDefault()
        console.log('clicked', e.target[1].value)
        newData.owes.push({month: e.target[0].value, amount: parseInt(e.target[1].value)})
        console.log('after append', newData)
        setItem(newData)
        console.log('after state', data)
    }

    async function handlePaymentSubmit(e){
        e.preventDefault()
        console.log('clickkkked')
        newData.pays.push(parseInt(e.target[0].value))
        console.log('aftrs ubmit', newData)
        handleFetch(newData)
    }

    async function handleFetch(data){
        const URL = "https://api.ttguitarnoob.cloud/rents/6554cb7a60c180217c7a8198"
        const options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "Application/json"
            }
        }

        const response = await fetch(URL, options)
        const sentData = await response.json()
        console.log("submitted", sentData)
    }

    return (
        <div>

            <div>
                <div className="w-full md:flex-nowrap gap-4">
                    <form onSubmit={handleMonthSubmit}>
                        <h2>Add Month</h2>
                        <Input type="month" label="Month" />
                        <h2>Amount</h2>
                        <Input type="number" label="Amount" placeholder="1600" />
                        <Button><button>Submit</button></Button>
                    </form>
                </div>
                <div>
                    <form onSubmit={handlePaymentSubmit}>
                        <h2>Add Payment Made</h2>
                        <Input type="number" label="Amount" />
                        <Button><button>Submit</button></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}