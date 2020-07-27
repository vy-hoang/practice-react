import React from "react";
import cars from "./data";
import Details from "./details";

function Items(cars){
    return(
        <Details 
           
            color={cars.color}
            key={cars.id}
            type={cars.type}
            registration={cars.registration}
            capacity={cars.capacity}
        
        />
    );
}

function App(){
    
    return(
        <div>
            {cars.map(Items)}
        </div>
    );
}


export default App;