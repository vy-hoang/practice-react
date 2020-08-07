import React, { Component } from "react";

// import cars from "./data";
// import Details from "./details";
// import Style from "./style";

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
// function App (){
//     const [num, setNum] = useState(0);
//     function handleClick(){
//         setNum(num + 1)
//         console.log("cliked");
//     }
//     return(
//         <div>
//             <h3>{num}</h3>
//             <button onClick={handleClick}>Clicked</button>
//         </div>
       
//     );
// }
// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             num: 0
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//         this.setState(prevState =>{
//             return{
//                 num: prevState.num + 1
//         }
//         })
//     }
    
//     render(){
//         return(
//             <div>
//                 <h3>{this.state.num}</h3>
//                 <button onClick={this.handleClick}>Clicked</button>
//             </div>
//         )
//     }
// }

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {date: new Date()};
//         console.log("original");
//     }
//     componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(), 1000
//         );
//         console.log("did mount");
//     }
//     componentWillMount(){
//         clearInterval(this.timerID);
//         console.log("will mount");
//     }
//     tick(){
//         this.setState({
//             date: new Date()
//         });
//         console.log("update");
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Hello, clock</h2>
//                 <p>it is {this.state.date.toLocaleTimeString()}</p>
//             </div>
//         );
//     }
// }


class App extends React.Component {
    constructor(props)
    {
      super(props);
       this.state = {
         date : new Date(),
         clickedStatus: false,
         list:[]
       };
    }
    componentWillMount() {
        console.log('Component will mount!')
     }
    componentDidMount() {
        console.log('Component did mount!')
        this.getList();
     }
    getList=()=>{
    //  /*** method to make api call***
     fetch('https://api.mydomain.com')
        .then(response => response.json())
        .then(data => this.setState({ list:data }));
    }
     shouldComponentUpdate(nextProps, nextState){
       return this.state.list!==nextState.list
      }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component will update!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!')
     }
    render() {
        return (
           <div>
              <h3>Hello Mounting Lifecycle Methods!</h3>
           </div>
        );
     }
}

export default App;