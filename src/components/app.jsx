import React, { Component } from "react";
import cars from "./data";
import Details from "./details";
import Style from "./style";

// function Items(cars){
//     return(
//         <div>
//             <Style />
//             <Details 
            
//             color={cars.color}
//             key={cars.id}
//             type={cars.type}
//             registration={cars.registration}
//             capacity={cars.capacity}
        
//             />

//         </div>
        
//     );
// }

// function App(){
    
//     return(
//         <div>
//             <div>
//                 <h1>You are currently (in/out)</h1>
//             </div>
//             {cars.map(Items)}
//         </div>
//     );
// }
// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     render(){
//         let result 
//         if (this.state.isLoggedIn === true){
//             result = "in"
//         }else{
//             result = "out"
//         }
//         return(
//             <div>
//                <h1>You are currently {result}</h1>
//             </div>
//         );
//         }
// }
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = {
//             name: "Alice",
//             age: "12"
//         }
//     }
//     handleClick(){
//         console.log("clicked");
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//                 <button onClick={this.handleClick}>Add</button>
//             </div>
//         )
//     }
// }
function App (){
    function handleClick(){
        console.log("cliked");
    }
    return(
        <button onClick={handleClick}>Clicked</button>
    );
}
export default App;