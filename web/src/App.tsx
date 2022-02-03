import { useEffect, useState } from 'react';
import {BusList} from './BusList';
import axios from 'axios';



const App: React.FC = props => {
  
  const [times, setTimes] = useState<object[] | undefined>();

  async function loadTimes() {
    const response = await axios.get('http://localhost:3000/bus-times');
    setTimes(response.data);
    };

  useEffect(()=>{
        loadTimes();
  },[])

  useEffect(()=> {
    const interval = setInterval(loadTimes, 10000);
    return () => clearInterval(interval)
    },[]);


if(times?.length === 0){
    return <h1>Loading</h1>
}
 
return (
    <div className="App">
      <BusList list={times}/>
            )
    </div>
  );
};

export default App;
