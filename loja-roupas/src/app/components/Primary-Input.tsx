'use client'

import { useState, useRef} from 'react';
import {Button} from './Button'

export function PrimaryInput() {

    const primaryRef = useRef<HTMLInputElement>(null);
    const [primaryRefValue, setPrimaryRefValue] = useState<null | string>(null);

    function handleSubmit() {
        if (primaryRef.current) {
            const value = primaryRef.current.value;
            setPrimaryRefValue(value);
            console.log(primaryRef.current.value)
        } 
    }

    return (
        <div className=''>
            <input className="bg-gray-100 outline-none p-2 rounded-md" type="text" placeholder="Nome do Produto" ref={primaryRef} />
            <Button handleSubmit={handleSubmit}/>
        </div>
    )
}