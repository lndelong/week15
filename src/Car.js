
import OwnerForm from './OwnerForm';

export default function Car({ car, id, deleteCar, updateOwner }) {
 

    return (
        <div className="border border-solid" key={id}>
           <h3>{car.year} {car.make} {car.model}</h3>
           <h4>Current Owner: {car.owner}</h4>
           <OwnerForm carId={car.id} updateOwner={updateOwner} /> 
          <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
    );
};