import React from 'react';
import { useLoaderData } from 'react-router';
import './CheeckOut.js.css'

const CheeckOut = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='text-center'>
      <p className='fs-1'>CheeckOut</p>
    
    </div>
  );
};

export default CheeckOut;