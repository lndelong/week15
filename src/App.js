import './App.css';
import CarList from './CarList';
import React, { useEffect, useState } from 'react';


export default function App() {
  const [cars, setCars] = useState ([])


  useEffect(() => {
    const getAllCars = async () => {
      const response = await fetch('https://644035103dee5b763e31c019.mockapi.io/Promineo_Tech_API/cars')
      const data = await response.json()
      setCars(data)
      console.log(data)
    }
    getAllCars()
    
  }, [])

  const addCar = async (newCarData) => {
    const response = await fetch('https://644035103dee5b763e31c019.mockapi.io/Promineo_Tech_API/cars', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCarData)
    });
    const newCar = await response.json();
    setCars([...cars, newCar])
  }  

  const deleteCar = async (id) => {
    // eslint-disable-next-line
    const response = await fetch("https://644035103dee5b763e31c019.mockapi.io/Promineo_Tech_API/cars/" + id, {
      method: "DELETE"
    })
    setCars(cars.filter(c => c.id !== id) )
  }

  const updateOwner = async (carId, newOwner) => {
    const response = await fetch(
      `https://644035103dee5b763e31c019.mockapi.io/Promineo_Tech_API/cars/${carId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ owner: newOwner }),
      }
    );
    if (response.ok) {
      setCars((prevCars) => {
      const updatedCars = prevCars.map((car) => {     
        if (car.id === carId) {
          return {...car, owner: newOwner };
        }
        return car;
      });
      return updatedCars;
      });
    } else {
      console.log('Failed to update owner');
    }
  }
  

  return(
    <div className='text-center'>
      <CarList cars={cars} addCar={addCar} deleteCar={deleteCar} updateOwner={updateOwner} />
    </div>
  );
}

