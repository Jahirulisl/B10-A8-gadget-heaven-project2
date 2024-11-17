import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='justify-center'>

            <div className="hero  bg-pink-500 text-white ">
               <div className="hero-content text-center">
                  <div className="max-w-md">

                   <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>

                   <p className="py-6 text-sm">
                   Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                   </p>

                   <button className="btn bg-white text-pink-500 my-20">Get Started</button>

                </div>
           </div>
         </div>
            <div className="-mt-20" >
              <img className='max-w-3xl mx-auto' src={bannerImg} alt="" />
            </div>
    </div>
    );
};

export default Banner;