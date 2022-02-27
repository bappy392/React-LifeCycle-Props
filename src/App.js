
import './App.css';
import {useState} from 'react' 
import OddOrEvent from './OddOrEven'
import CardNum from './CardNum';

function App() {

  const [count, setCountFunc]=useState(0)

  const randomCards=[30,33,,37,42]
  const [pickedNum,setPickedNum]=useState(null)

  // console.log(pickedNum)
const pickedValueAlt=(pickedNum)=>{
  setPickedNum(pickedNum)
}

  const incrementCount=()=>{
    setCountFunc(count+1)
  }
  const decrementCount=()=>{
    setCountFunc(count-1)
  }
  const reset=()=>{
    setCountFunc(0)
  }


  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <OddOrEvent count={count} pickedNum={pickedNum}/>


       {randomCards.map(cardValue=>{
         return <CardNum 
         key={cardValue}
         cardValue={cardValue}
         setPickedNum={pickedValueAlt}
          />
       })}




    </div>
  );
}

export default App;
