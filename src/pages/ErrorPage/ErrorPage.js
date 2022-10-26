import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import './ErrorPage.css'

const ErrorPage = () => {

  const container = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./404.json')
    })
  })
  return (
    <div>
      <h1>Lottie</h1>
      <div className=' my-lotie container' ref={container}></div>
      <p className='error-text'>404 Page Not Found!</p>
    </div>
  );
};

export default ErrorPage;