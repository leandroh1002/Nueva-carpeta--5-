import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish } from "../../redux/actions/index";
import Card from '../Card/Card';
import InfiniteCarreousel from '../infiniteCarreousel';
import Hero from '../Hero';
import Testimonials from '../Testimonials';


function Home() {
    const allPublishes = useSelector((state) => state.allPublish);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllPublish())
    },[dispatch])

    console.log(allPublishes)

  return (
    <div className="flex justify-center flex-wrap m-8">
      <Hero />
        {Array.isArray(allPublishes) && allPublishes.length > 0 ? (
        allPublishes.map((user) => <Card key={user.idPublish} {...user} />)
      ) : (
        <p>No hay datos</p>
      )}
      <InfiniteCarreousel/>
      <Testimonials />
    </div>

  )
}

export default Home