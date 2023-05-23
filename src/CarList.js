import Car from './Car';
import CarForm from "./CarForm";

//import { useState } from 'react';

export default function CarList({ cars, addCar, deleteCar, updateOwner }) {

    return(
        <div className="car-list">   
          <h2>Car List</h2>          
            { cars.map((car) => (
                <div key={car.id}>
                    <Car car={car} key={car.id} deleteCar={deleteCar} updateOwner={updateOwner} />                     
                </div>    
            ))} 
            <CarForm cars={cars} addCar={addCar}/>                               
        </div>        
    );
}
