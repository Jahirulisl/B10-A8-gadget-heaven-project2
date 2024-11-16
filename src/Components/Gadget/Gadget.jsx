
const Gadget = ({gadget}) => {
    const {product_image,product_title,category,price,description,specification,availability,rating} = gadget;
    return (
    
        <div>

           <div className="card bg-base-100  w-96 shadow-xl p-6">
              <figure className="rounded-lg">
                <img
                  src={product_image}
                   className="h-[322px] w-[380px]"
                   alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product_title}
                </h2>
               <p>Price ${price}</p>
              <div className="card-actions">
                 <button  className="badge badge-outline">View Details</button>
               </div>
            </div>
       </div>
        </div>
    );
};

export default Gadget;