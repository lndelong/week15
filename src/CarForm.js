import { useState } from "react";

export default function CarForm({ cars, addCar }) {

const [makeValue, setMake] = useState('');
const [modelValue, setModel] = useState('');
const [yearValue, setYear] = useState('');
const [ownerValue, setOwner] = useState('');

const onSubmit = (e) => {
    e.preventDefault();
    if (makeValue && modelValue && yearValue) {
        const newCar = {
            make: makeValue,
            model: modelValue,
            year: yearValue,
            owner: ownerValue
        };
        addCar(newCar);
        setMake('');
        setModel('');
        setYear('');
        setOwner('');
    } else {
        console.log('invalid input');
        }
}

    return(
        <div><br></br><br></br>
            <h2>Add a new car</h2>
    
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="Make"
                    onChange={(e) => setMake(e.target.value)}
                    value={makeValue}
                />
                <input
                    type='text'
                    placeholder="Model"
                    onChange={(e) => setModel(e.target.value)}
                    value={modelValue}
                />
                 <input
                    type='text'
                    placeholder="Year"
                    onChange={(e) => setYear(e.target.value)}
                    value={yearValue}
                />
                 <input
                    type='text'
                    placeholder="Name of Owner"
                    onChange={(e) => setOwner(e.target.value)}
                    value={ownerValue}
                />
                <button type='submit'>Add Car</button>
            </form>
        </div>
    )
};