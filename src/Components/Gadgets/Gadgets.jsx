import React, { useEffect, useState } from 'react';

const Gadgets = () => {
   const [gadgets,setGadgets] = useState([]);
    
   useEffect(()=>{
    fetch('/GadgetsData.json')
    .then(res =>res.json())
    .then(data=>setGadgets(data))
   },[])

    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Gadgets</h2>
            <p>{gadgets.length}</p>

        </div>
    );
};

export default Gadgets;

/**
 * 1. state to stor gadget.
 * 2. useEffect.
 * 3. fetch to load data.
 * 4.
 * set the data to the gadgets state.
 */