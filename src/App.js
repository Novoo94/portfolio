// import logo from './logo.svg';
import './App.css';
import flash from './flash.gif'
import bugs from './bugs.gif'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState("")
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  // update the value of our stste variable query to whatever is typed in the input 
  const updateQuery = e => {
    console.log(e.target, e.target.value);
    setQuery(e.target.value)

  }
  // when my button is clicked i am going to open a new page in google search
  const searchClick = e => {
    console.log(e);
    window.open(`https://www.google.com/search?tbm=isch&q=${query}`)
    setQuery("");
  }


  return (
    <div className="App">
      <div className='navbar'>
        <img src={flash} />
        <img src={bugs} />
      </div>
      <h2>Welcome to my site!</h2>
      <div className='image-search-container'>
        <label >image search</label>
        {/* need an input for searching  */}
        <input onInput={updateQuery} value={query} placeholder="Image Search" />
        {/* need a button to send the search request */}
        <button onClick={searchClick}>Search</button>
      </div>
      <div className='click-container'>
        <button onClick={incrementCount}>+</button>
        {/* a place to render the current click count  */}
        <h3>Click Count: {count}</h3>
        {/* two buttoms to update value of click count  */}
        <button onClick={decrementCount}>-</button>
        {/* need input for searching */}
      </div>

    </div >

  );
}

export default App;
