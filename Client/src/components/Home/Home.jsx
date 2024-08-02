import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish } from "../../redux/actions/index";
import Card from '../Card/Card';
import Hero from '../Hero';
import InfiniteCarreousel from '../InfiniteCarreousel';
import Testimonials from '../Testimonials';
import style from "../Card/Card.module.sass"


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
      <InfiniteCarreousel/>
      <div className={style.card}>
        {Array.isArray(allPublishes) && allPublishes.length > 0 ? (
        allPublishes.map((user) => <Card key={user.idPublish} value={valueId.valueId} {...user} />)
      ) : (
        <p>No hay datos</p>
      )}
      </div>
      <div className='rounded-tl-[7rem] rounded-br-[7rem] w-full bg-white'>
      <Testimonials />
      </div>
    </div>

  )
}

export default Home