import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50 mb-10">
                <div class="divider font-bold text-title text-xl">Our Pricing Plan</div>
                <div class="grid card  rounded-box text-center text-3xl font-bold"><p>We are Interested for Your <span className='text-title'>Pricing <br /></span> Plan Service</p></div>
            </div>
            <div className='container'>

                <div className='grid grid-cols-3 mx-12 mb-10'>

                    <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
                        <h2 className='font-bold text-2xl text-center mb-10 text-title mt-5'>Standard</h2>
                        <figure><img src="https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-dollar-symbol-signs-icons-1.png" alt="Shoes" className='w-32' /></figure>
                        <div className="card-body">
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Miximum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Minimum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>50 Free Accounts</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Free Banking</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Maintenance</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>24/7 Support</p>
                            <button className="btn btn-accent mt-8 text-white text-xl">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
                        <h2 className='font-bold text-2xl text-center mb-10 text-title mt-5'>Business</h2>
                        <figure><img src="https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-prussiaart-vadim-deviantart-16.png" alt="Shoes" className='w-32' /></figure>
                        <div className="card-body">
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Miximum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Minimum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>50 Free Accounts</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Free Banking</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Maintenance</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>24/7 Support</p>
                            <button className="btn btn-accent mt-8 text-white text-xl">BOOK NOW</button>
                        </div>
                        
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
                        <h2 className='font-bold text-2xl text-center mb-10 text-title mt-5'>Advance</h2>
                        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png" alt="Shoes" className='w-32' /></figure>
                        <div className="card-body">
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Miximum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Minimum Deposit</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>50 Free Accounts</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Free Banking</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>Maintenance</p>
                            <p className='font-bold'><i class="fa-solid fa-check-circle text-title mx-5"></i>24/7 Support</p>
                            <button className="btn btn-accent mt-8 text-white text-xl">BOOK NOW</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Pricing;