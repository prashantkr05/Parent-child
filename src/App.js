import logo from './logo.svg';
import './App.css';
import Sender from './Components/Sender';
import Receiver from './Components/Receiver';
import Parent from './Components/Parent';
function App() {
  return (
    <div>
     <Parent />
      {/* <Sender /> */}
      {/* <Receiver/> */}
    </div>
  );
}

export default App;



// import {useState} from 'react';

// function Child({handleClick}) {
//   return (
//     <div>
//       <button onClick={event => handleClick(100)}>Click</button>
//     </div>
//   );
// }

// export default function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = num => {
//     // 👇️ take parameter passed from Child component
//     setCount(current => current + num);
//   };

//   return (
//     <div>
//       <Child handleClick={handleClick} />

//       <h2>Count: {count}</h2>
//     </div>
//   );
// }
