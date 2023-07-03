import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setInterval(()=>{
console.log(new Date());
    },1000)
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
