import logo from './logo.svg';
import './App.css';
import Owe from './Components/Owe';
import { useEffect, useState } from 'react';
import Paid from './Components/Paid';

function App() {

  const [item, setItem] = useState()

    async function handleFetch() {
        URL = "https://api.ttguitarnoob.cloud/rents/6554cb7a60c180217c7a8198"
        const options = {
            method: "GET"
        }

        try {
            const responst = await fetch(URL)
            const data = await responst.json()
            setItem(data)
            console.log('data fetched', data)
        } catch(err) {
            console.log('something terrible happened when fetching', err)
        }
            
        
    }

    useEffect(() => {
        handleFetch()
    }, [])


  return (
    <div className="App">
      <Owe data={item} />
      <Paid data={item} />
    </div>
  );
}

export default App;
