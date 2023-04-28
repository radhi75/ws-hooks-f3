
import { useState,useEffect } from 'react';
import './App.css';
import moviesData from './assets/Data';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import AddMovie from './Components/AddMovie';

function App() {
  const [counter,setCounter]=useState(0)
  const [isShow,setShow]=useState(true)
  const [data,setData]=useState(moviesData)
  const handleClick=()=>setShow(!isShow)
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
  useEffect(() => {
  alert("hello world")
  }, [])

  return (
    <div className="App">
    {/* <button onClick={handleClick}>Click</button> */}
    <Navigation setSearch={setSearch} setRate={setRate} rate={rate}/>
    <AddMovie setData={setData} data={data}/>
    <MovieList data={data} search={search} rate={rate}/>
    {/* {isShow && <div>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <span>{counter}</span>
    <button onClick={()=>counter>0?setCounter(counter-1):counter}>-</button></div>} */}
    </div>
  );
}

export default App;
