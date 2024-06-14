'use client'

import { useState, useRef, useEffect } from 'react';

export function PrimaryInput() {

    const primaryRef = useRef<HTMLInputElement>(null);
    const [primaryRefValue, setPrimaryRefValue] = useState<null | string>(null);

    function handleSubmit() {
        if (primaryRef.current) {
            const value = primaryRef.current.value;
            setPrimaryRefValue(value ? value: null);
            console.log(primaryRef.current.value)
        } 
    }

    return (
        <div>
            <input type="text" placeholder="Nome do Produto" ref={primaryRef} />
            <button className="bg-blue-400 text-white py-2 px-4 ml-2 rounded hover:bg-blue-500"
                onClick={handleSubmit}> SUBMIT
            </button>
        </div>
    )
}