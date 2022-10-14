import React from 'react'
import { Link } from 'react-router-dom';
import './MobileBank.css';
export const MobileBank = () => {
  return (
    <div>
        <img src='https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/cake_3_1.medium.medium_quality.jpg'></img>
        <div className="min-h-screen bg-base-200">
  <div className="m-banking bg-gray-200 p-12">
    <div className="">
      <h1 className="text-5xl">The Ninja Banking app
<br></br>Take control of your money</h1>
<button className="btn btn-banner mt-5">Get the app</button>
      <p className="py-6">Check your balance, send money and earn rewards on your mobile with the Ninja Banking app</p>
      <ul>
        <li> <i class="fa-regular fa-circle-check"></i> Pay people and check your balance</li>
        <li> <i class="fa-regular fa-circle-check"></i> Change your cash machine limit, view your PIN and freeze your card</li>
      </ul>
    </div>
  </div>
</div>

<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 hh'>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/bmb_icon_spending_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">How to register for the app</h2>
    <p>Want to know more about registering for the Barclays app? Our videos show you how it works.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>How to register</Link>
    </div>
  </div>
</div>

<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/bmb_icon_make_payments_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Pay from one place</h2>
    <p>Did you know that you can use your Barclays app to make secure payments and transfer money between accounts?</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Pay someone new</Link>
     <Link to="/" className='hello'>Pay someone you've paid before</Link>
     <Link to="/" className='hello'>Transfer between your accounts</Link>
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/bmb_icon_notifications_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">App ID
</h2>
    <p>With app ID, we can check that you are who you say you are on the phone and in branch, simply by sending a secure notification to your device. And if we call you, you can use app ID to check that it’s us.

</p>
    <div className="card-actions">
     <Link to="/" className='hello'>APP ID</Link>
    
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/bmb_icon_agg_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Link accounts from other banks</h2>
    <p>You can now see the balances and transactions of your other bank accounts in the Barclays app.</p>
    <div className="card-actions justify-end">
     <Link to="/" className='hello'>How to link other links to your network?</Link>
    </div>
  </div>
</div>


</div>
<h1 className='text-4xl mt-5 mb-3 text-center mb-5'>Installing your Barclays app on a new device?</h1>
<p className='font-bold text-center'>You’ll need an activation code – you can generate this using the app on your old device, if you still have it.</p>
<ol className='mx-96 mb-10'>
    <li>1. Log in to your app on your old device.</li>
    <li>2. Select ‘More’ from the bottom of the page.</li>
    <li>3. Select ‘Manage accounts’ and then ‘Generate activation code’.</li>
</ol>
    </div>
  )
}
