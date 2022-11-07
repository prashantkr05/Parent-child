import { useState } from "react";

   import "./Increment.css"
  export default function Sender({incrementFunc}) {
    
   
      return (
        <div className="Sender-cls">
            <h1>Sender Child</h1>
          <button onClick={incrementFunc}>Click</button>
        </div>
      );
    }





// const Sender = ({getSenderValue})=> {
//     const [counter,setCounter]=useState(0);

//      getSenderValue =()=>{
//         setCounter(counter+1);
//     }

//     return ( 
//         <>
//         <button onClick={getSenderValue}>click Me</button>
//         </>
//      );
// }
 
// export default Sender;