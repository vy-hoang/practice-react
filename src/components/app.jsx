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
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Alice",
            age: "12"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}
export default App;