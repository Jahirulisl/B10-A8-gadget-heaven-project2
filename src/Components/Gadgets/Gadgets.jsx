import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import Detils from '../Detils/Detils';

const Gadgets = () => {
   const [gadgets,setGadgets] = useState([]);
    
   useEffect(()=>{
    fetch('/GadgetsData.json')
    .then(res =>res.json())
    .then(data=>setGadgets(data))
   },[])

    return (
     <div className='max-w-[1800px] mx-auto mt-8 '>
         <div className='flex justify-between'>
             <div>
              {
                <Detils></Detils>
              }
             </div>

             <div className='mr-4 grid grid-cols-1  lg:grid-cols-3 gap-6 '>
             {
              gadgets.map(gadget=> <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)   
             },
             </div>
            </div>

        </div>
    );
};

export default Gadgets;


