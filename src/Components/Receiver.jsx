import "./Increment.css"
const Receiver = ({count}) => {
    return ( 
        <div className="Reciever-cls">
        <h1>Reciever Child</h1>
        <h4>{count}</h4>
        </div>
     );
}
 
export default Receiver;

























// import Parent from "./Parent";
// const Receiver = (props) => {
//     console.log(props.data)
//     return ( 
        
//         <>
        
//         <h2>{props.data}</h2>
//         <p>Hello</p>
//         </>
//      );
// }
 
// export default Receiver;