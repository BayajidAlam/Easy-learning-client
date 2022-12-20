import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import './CheeckOut.js.css'

const CheeckOut = () => {
  const data = useLoaderData()
  const [purchageNow,serPurchaseNow] = useState('Purchase Now')
  const handlePurchage = (event) => {
    toast.success("You have Purchage this course successfully!");
    event.currentTarget.disabled = true;
    serPurchaseNow('Purchased')
  }

  return (
    <div className='main'>
      <div className='cheek'>
        <p className='text-center'>CheeckOut Now</p>
        <p>Course name: <span>{data.title}</span></p>
        <p>Course Price: {data.price}</p>
        <div className='text-center'>
          <button onClick={handlePurchage}  className='purchage-btn'>{purchageNow}</button>
          </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CheeckOut;