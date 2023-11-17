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
    const URL = "https://api.ttguitarnoob.cloud/rents/6554cb7a60c180217c7a8198"


    try {
      const responst = await fetch(URL)
      const data = await responst.json()
      setItem(data)
    } catch (err) {
      console.log('something terrible happened when fetching', err)
    }


  }

  useEffect(() => {
    handleFetch()
    console.log("why are you looking at the console for this, Heather!")
  }, [])

  function setTheState(data) {
    setItem(data)
    console.log('the data', data)
  }

  if (!item) return <div className='loading'>
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
        <section className='total-section font-medium text-2xl'>
          <Total data={item} />
        </section>
        <section className='input-section'>
          <AddItem data={item} setItem={setTheState} />
        </section>
      </div>
    </NextUIProvider>
  );
}

export default App;
