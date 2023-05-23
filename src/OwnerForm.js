import React, { useState } from "react";

export default function OwnerForm({ carId, updateOwner }) {

    const [ownerValue, setOwnerValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ownerValue) {
            updateOwner(carId, ownerValue);
            setOwnerValue('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Update Owner"
                    onChange={(e) => setOwnerValue(e.target.value)}
                    value={ownerValue}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};