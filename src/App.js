import axios from 'axios';
import Card from './components/Card';
import {useState, useEffect} from "react";
import "./App.css";

function App() {
const [user, setUser] = useState()

const url = "https://randomuser.me/api/";

const getData = async()=>{
  const {data} = await axios.get(url)
  setUser(data.results[0])
}

useEffect(() => {
getData();
}, [])
console.log(user);
  return (
    <div className="App">
      <Card user={user}/>
      
      <button className='text-center bg-danger d-flex mx-auto rounded mt-3' onClick={() =>getData()}>Random User</button>
    </div>
  );
}
export default App;