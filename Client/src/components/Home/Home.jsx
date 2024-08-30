import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish, getFilteredPublish, getSomePublish,  } from "../../redux/actions/index";
import Card from '../Card/Card';
import Hero from '../Hero';
import InfiniteCarreousel from '../InfiniteCarreousel';
import StoreItem from "../../helpers/LocalStorage";
import Testimonials from '../Testimonials';
import style from "../Card/Card.module.sass"
import Objetives from '../Objetives';


function Home(valueId) {
  const allPublishes = useSelector((state) => state.allPublish);
  const allFilteredPublishes = useSelector((state) => state.FilteredPublish);
  const dispatch = useDispatch();
  const idLocalStorage = JSON.parse(localStorage.getItem("idCarrer"));
  const admin = localStorage.getItem(StoreItem.isAdmin)

  
  const filterOrNot = async (idLocalStorage) => {
    if (admin === "undefined" || admin === "true" ) {
      return await getAllPublish(); 
    } else {
      return await getFilteredPublish(idLocalStorage); 
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await filterOrNot(idLocalStorage);
      dispatch(data);
    };
    
    fetchData();
  }, [dispatch, idLocalStorage]);
  
  //console.log(allFilteredPublishes);
  //console.log(allPublishes);

  return (
    <div className="flex justify-center flex-wrap">
      <Hero />
      <InfiniteCarreousel/>
      <Objetives/>
      <div className={style.card}>
        <h5 className='mb-24 text-[#E5EFFF] '>Nuestras pasantias</h5>
        <div className='flex w-[80%] justify-evenly flex-wrap'>
          {Array.isArray(allPublishes) && allPublishes.length > 0 ? (
            allPublishes.map((user) => <Card key={user.idPublish} value={valueId.valueId} {...user} />)
          ) : Array.isArray(allFilteredPublishes) && allFilteredPublishes.length > 0 ? (
            allFilteredPublishes.map((user) => <Card key={user.idPublish} value={valueId.valueId} {...user} />)
          ) : (
            <p>No hay datos</p>
          )}
        </div>
      </div>
      <div className=' w-full bg-[#184ca0]'>
        <Testimonials />
      </div>
    </div>
  )
}

export default Home;
