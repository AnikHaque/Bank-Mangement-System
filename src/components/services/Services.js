import React from 'react'

export const Services = () => {
  return (
    <div>
        <h2 className=' text-center mb-5 text-title text-2xl'>Our Services <i class="fa-solid fa-arrow-right font-bold"></i> </h2>
        
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1'>

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://themesfamily.com/tm/mumin/assets/img/feature/002-bank.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Mobile Banking</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-banner">Buy Now</button>
    </div>
  </div>
</div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://themesfamily.com/tm/mumin/assets/img/feature/004-bank-1.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Online Banking</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-banner">Buy Now</button>
    </div>
  </div>
</div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://themesfamily.com/tm/mumin/assets/img/feature/001-debit-card.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Credit Cards</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-banner">Buy Now</button>
    </div>
  </div>
</div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://themesfamily.com/tm/mumin/assets/img/feature/003-transfer-money.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Smart Business</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-banner">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}
