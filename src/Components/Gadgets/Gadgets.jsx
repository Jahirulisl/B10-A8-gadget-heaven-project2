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
        <div className='justify-center'>
             <h2 className='text-5xl font-bold text-center'>Gadgets</h2>

              <div className='flex'>
                  <div className=''>
                    {
                      <Detils></Detils>
                    }
                  </div>

                   <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-center'>
                      {
                         gadgets.map(gadget=> <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)   
                       },
                   </div>
               </div>

            </div>
    );
};

export default Gadgets;


