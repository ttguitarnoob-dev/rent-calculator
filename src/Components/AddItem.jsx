import { Input, Button } from "@nextui-org/react";
export default function AddItem({ data }) {

    let newData = data

    async function handleMonthSubmit(e){
        e.preventDefault()
        console.log('clicked', e.target[1].value)
        newData.owes.push({month: e.target[0].value, amount: e.target[1].value})
        console.log('after append', newData)
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
                    <form>
                        <h2>Add Payment Made</h2>
                        <Input type="number" label="Amount" />
                    </form>
                </div>
            </div>
        </div>
    )
}