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
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-white text-3xl font-bold pb-2">Add Item</h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Add an Item!"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="w-[320px] px-4 py-2 bg-gray-300 border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <button
                onClick={handleAddItem}
                className="w-[320px] mb-3 h-9 bg-gray-500 text-xl font-semibold rounded-lg hover:bg-gray-600 transition duration-500"
            >
                Add
            </button>
        </div>
    );
};

export default AddItem;
