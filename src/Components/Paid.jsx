import {CircularProgress} from "@nextui-org/react";
export default function Paid({ data }) {



    // if (!data) return <div>
    //     <CircularProgress label="Loading..." />
    // </div>



    return (
        <div>
            <h1>Paid</h1>
            {data.pays && data.pays.map((oneItem, index) => (
                <p key={index}>Payment Made: ${oneItem}</p>
            ))}
        </div>
    )
}