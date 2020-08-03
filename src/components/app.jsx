import React from "react";
import cars from "./data";
import Details from "./details";
import Style from "./style";

function Items(cars){
    return(
        <div>
            <Style />
            <Details 
            
            color={cars.color}
            key={cars.id}
            type={cars.type}
            registration={cars.registration}
            capacity={cars.capacity}
        
            />

        </div>
        
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