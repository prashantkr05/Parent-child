import { useState } from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";


export default function Parent () {
  const [count,setCount]=useState(0);
   
  const incrementFunc = () => {
    setCount(prevCount=>prevCount+1);
    console.log("Parent Executed");
  }
  
  return ( 
    <div>
    {/* <h1>Parent Child</h1> */}
    <Sender incrementFunc={incrementFunc} d />
    <Receiver count={count}/>
    </div>
   );
}
 

























// import Receiver from "./Receiver";
// import Sender from "./Sender";

// const Parent = ({handleChange}) => {
//     // const data=0;
//     return ( 
//         <>
//       {/* data = {props.dataTransfer} */}
//         {/* <Receiver data={data}></Receiver> */}
//         {handleChange}
//         <p>Hello!!</p>
//         {/* <Receiver/> */}
//         </>
//      );
// }
 
// export default Parent;