import React from 'react';
import { About } from '../about/About';
import { Class } from '../class/Class';

const AboutUs = () => {
    return (
        <div>
            <h2 className=' text-center mb-5 text-title text-2xl mt-12'>ABOUT US <i class="fa-solid fa-arrow-right font-bold"></i> </h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 container mb-12'>
                <div className='class mt-10 lg:max-w-lg mx-auto'>
                    <h1 className='font-bold text-title text-3xl mb-3'>How to Create An Account Online money Transfer dabit Card withdraw</h1>
                    <h2 className='mb-5 text-2xl'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text lorem ipsum' will uncover many web.</h2>
                    <div className='flex items-center mb-3'>
                        <i class="fa-solid fa-money-bill-1 text-title text-6xl"></i>
                        <p className='ml-3'>Account editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web.</p>
                    </div>
                    <div className='flex items-center mb-5'>
                    <i class="fa fa-credit-card text-title text-6xl"></i>
                        <p className='ml-3'>Account editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web.</p>
                    </div>
                    <button className='btn btn-banner mt-2'>Contact Us</button>
                </div>
                <div>
                    <p className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 container'>
                        <img src="https://themesfamily.com/tm/mumin/assets/img/about/about-2.jpg" alt="" />
                        <img src="https://themesfamily.com/tm/mumin/assets/img/about/about-1.jpg" alt="" />
                    </p>
                    <img src='https://themesfamily.com/tm/mumin/assets/img/about/about-3.jpg' className='lg:max-w-lg mx-auto'></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Class></Class>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default AboutUs;