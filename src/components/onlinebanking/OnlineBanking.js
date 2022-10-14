import React from 'react'
import { Link } from 'react-router-dom'
import './OnlineBanking.css';
export const OnlineBanking = () => {
  return (
    <div>
         <div>
        <img src='https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/online_banking1-3_1.medium.medium_quality.jpg'></img>
        <div className="min-h-screen bg-base-200">
  <div className="m-banking bg-gray-200 p-12">
    <div className="">
      <h1 className="text-5xl">Explore Online Banking
<br></br>Bank from your browser</h1>
<button className="btn btn-banner mt-5">Get the app</button>
      <p className="py-6">Check your balance, send money and earn rewards on your mobile with the Ninja Banking app</p>
      <ul>
        <li> <i class="fa-regular fa-circle-check"></i> Pay people and check your balance</li>
        <li> <i class="fa-regular fa-circle-check"></i> Change your cash machine limit, view your PIN and freeze your card</li>
      </ul>
    </div>
  </div>
</div>
<h1 className='text-2xl text-center mb-5 hu'>We’re refreshing our homepage</h1>
<p className='text-center'>We’ve been busy brightening up our homepage, so you’ll soon see it looks a bit different. <br></br>Most things are still in the same place –  it’s just the look and feel that’s new.</p>
<br></br>
<p className='text-center'>There’s also a new page where you can reorder and rename your accounts, <br></br>and choose whether to show or hide them on your homepage.</p>
<img src='https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/rolb_log_in_no_cookie.medium.medium_quality.png'></img>
<br></br>
<br></br>
<br></br>
<br></br>
<h1 className='text-2xl text-center mb-5'>Other things you can do</h1>
<p className='text-center'>You might be surprised at some of the things you can do in Online Banking.</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 hh'>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/International_Payments_16_9.xxsmall.medium_quality.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Making an international payment?</h2>
    <p>Pay someone abroad in 2-3 working days.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Login to make a payment</Link>
    </div>
  </div>
</div>

<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/View_Pin_16_9.xxsmall.medium_quality.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">View your pin</h2>
    <p>You can securely access your 4-digit PIN number online. </p>
    <div className="card-actions">
     <Link to="/" className='hello'>Take a look</Link>
</div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/Tax_Statement_16_9.xxsmall.medium_quality.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Need tax statements?
</h2>
    <p>Order your annual tax or interest statements online.

</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Satement of deduction</Link>
    
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/Paperless_statement_icon_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Paperless documents</h2>
    <p>Go paperless to view, download and print your documents whenever you need them – it’s secure and convenient.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Go paperless</Link>
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/Change_Address_16_9.xxsmall.medium_quality.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Moved Home?</h2>
    <p>You can change your address online instantly.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Update your address</Link>
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/Lost_or_stolen_card_16_9%20.xsmall.medium_quality.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">Lost or stolen card?</h2>
    <p>Stop and re-order a lost or stolen card 24/7.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>How to order a new card ?</Link>
    </div>
  </div>
</div>
<div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
  <figure><img src="https://www.barclays.co.uk/content/dam/lifestyle-images/personal/ways-to-bank/Cards_Credit_Debit_Grey_16_9.xxsmall.medium_quality.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl">My card’s not working</h2>
    <p>There are lots of reasons why your card might not be working online, at a cash machine or in store. Our handy tool can help you work out what the problem is, and how to fix it.</p>
    <div className="card-actions">
     <Link to="/" className='hello'>Card help</Link>
    </div>
  </div>
</div>


</div>

    </div>
    </div>
  )
}
