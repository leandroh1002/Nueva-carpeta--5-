import React from 'react'

function InfiniteCarreousel() {
  return (
    <div className='flex space-x-16 overflow-hidden group'>
        <div className='flex space-x-16 animate-loop-scroll group-hover:paused' >
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image1" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image2" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image3" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image4" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image5" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image6" loading='lazy' className='max-w-none'/>
        </div>
        <div className='flex space-x-16 animate-loop-scroll group-hover:paused' aria-hidden="true" >
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image1" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image2" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image3" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image4" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image5" loading='lazy' className='max-w-none'/>
            <img src="http://res.cloudinary.com/dn3kedyer/image/upload/v1717442890/image/l6auxmd9s5rabue64odo.png" alt="Image6" loading='lazy' className='max-w-none'/>
        </div>
    </div>
  )
}

export default InfiniteCarreousel