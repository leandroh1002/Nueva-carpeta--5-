import React from 'react'

function Testimonials() {
  return (
    <section className="body-font rounded-tl-[200px] rounded-br-[200px] bg-[#c2d8ff] ">
    <div className="container px-5 py-24 mx-auto">
      <div className='mb-20'>
      <h5 className='mb-3'>Testimonios de nuestros alumnos.</h5>
      <p className='w-[687px] m-auto'>Descubre cómo nuestras pasantías han transformado las carreras de nuestros participantes. Estas historias reflejan el impacto real y las experiencias inolvidables que han vivido junto a nosotros.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-left">
          <div className='flex '>
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
            <div className='flex flex-col justify-center p-4'>
              <h2 className=" font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="">Senior Product Designer</p></div>
            </div>
            <span className="inline-block h-1 w-10 rounded bg-[#246bd6] mt-6 mb-4"></span>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-left">
          <div className='flex '>
            <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
            <div className='flex flex-col justify-center p-4'>
            <h2 className=" font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
            <p className="">UI Develeoper</p></div>
            </div>
            <span className="inline-block h-1 w-10 rounded bg-[#246bd6] mt-6 mb-4"></span>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-left">
            <div className='flex '>
          <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            
            className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
            <div className='flex flex-col justify-center p-4'>

            <h2 className=" font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
            <p className="">CTO</p>
            </div>
            </div>
            <span className="inline-block h-1 w-10 rounded bg-[#246bd6] mt-6 mb-4"></span>
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials