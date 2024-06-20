import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish } from "../../redux/actions/index";
import Card from '../Card/Card';
import Hero from '../Hero';
import InfiniteCarreousel from '../InfiniteCarreousel';
import Testimonials from '../Testimonials';


function Home(valueId) {
    const allPublishes = useSelector((state) => state.allPublish);
    const dispatch = useDispatch();
  console.log(valueId)

    useEffect(()=>{
        dispatch(getAllPublish())
    },[dispatch])

    console.log(allPublishes)

  return (
    <div className="flex justify-center flex-wrap">
      <Hero />
        {Array.isArray(allPublishes) && allPublishes.length > 0 ? (
        allPublishes.map((user) => <Card key={user.idPublish} value={valueId.valueId} {...user} />)
      ) : (
        <p>No hay datos</p>
      )}
      <InfiniteCarreousel/>
      <Testimonials />
    </div>

  )
}

export default Home