import React, { useState } from 'react';
import { db } from "./configuration";
import { addDoc, collection } from 'firebase/firestore';

const AddItem = () => {
    const [item, setItem] = useState('');

    const handleAddItem = async (e) => {
        e.preventDefault();
        if (item) {
            try {
                await addDoc(collection(db, 'items'), { name: item });
                setItem('');
                alert("Item Added");
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <h2>Add Item</h2>
            <div className="form-group">
                <input type="text" placeholder="Add an Item!" value={item} onChange={(e) => setItem(e.target.value)} />
            </div>
            <button onClick={handleAddItem}>Add</button>
        </>
    );
};

export default AddItem;
