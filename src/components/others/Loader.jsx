import React from 'react'
import Loading from '../assets/images/LoaderImg.gif';

const Loader = () => {
  return (
    <div>
        <img src={Loading} alt="Loader" className='d-block m-auto' />
    </div>
  )
}

export default Loader