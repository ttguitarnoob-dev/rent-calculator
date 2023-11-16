import { NextUIProvider } from '@nextui-org/react';
import { CircularProgress } from '@nextui-org/react';
import './App.css';
import Owe from './Components/Owe';
import { useEffect, useState } from 'react';
import Paid from './Components/Paid';
import Total from './Components/Total';
import AddItem from './Components/AddItem';

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
    } catch (err) {
      console.log('something terrible happened when fetching', err)
    }


  }

  useEffect(() => {
    handleFetch()
  }, [])

  function setTheState(data) {
    setItem(data)
    console.log('the data', data)
  }

  if (!item) return <div>
    <CircularProgress label="Loading..." />
  </div>


  return (
    <NextUIProvider>
      <div className="App dark text-foreground bg-background">
        <section className='data-section'>
          <div className='data-display'>
            <Owe data={item} />
          </div>
          <div className='data-display'>
            <Paid data={item} />
          </div>
        </section>
        <Total data={item} />
        <AddItem data={item} setItem={setTheState} />
      </div>
    </NextUIProvider>
  );
}

export default App;
