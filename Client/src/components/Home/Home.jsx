import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish, getFilteredPublish } from "../../redux/actions/index";
import Card from '../Card/Card';
import Hero from '../Hero';
import InfiniteCarreousel from '../InfiniteCarreousel';
import StoreItem from "../../helpers/LocalStorage";
import Testimonials from '../Testimonials';
import { motion } from 'framer-motion';  // Importa Framer Motion
import { useInView } from 'react-intersection-observer'; // Para detectar si el elemento está en la vista
import style from "../Card/Card.module.sass";
import Objetives from '../Objetives';

function Home(valueId) {
  const allPublishes = useSelector((state) => state.allPublish);
  const allFilteredPublishes = useSelector((state) => state.FilteredPublish);
  const dispatch = useDispatch();
  const idLocalStorage = JSON.parse(localStorage.getItem("idCarrer"));
  const admin = localStorage.getItem(StoreItem.isAdmin);

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

  // Configuración de las animaciones de aparición
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial (oculto)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Estado visible con animación
  };

  return (
    <div className="flex justify-center flex-wrap">
      <Hero />
      <InfiniteCarreousel/>
      <Objetives/>
      <div id='tarjetas' className={style.card}>
        <h5 id='nuestrasPasantias' className='mb-24 mt-24 text-[#E5EFFF] '>Nuestras pasantías</h5>
        <div className='flex w-[80%] justify-evenly flex-wrap'>
          {Array.isArray(allPublishes) && allPublishes.length > 0 ? (
            allPublishes.map((user, index) => (
              <CardWithScrollAnimation key={user.idPublish} index={index} value={valueId.valueId} {...user} />
            ))
          ) : Array.isArray(allFilteredPublishes) && allFilteredPublishes.length > 0 ? (
            allFilteredPublishes.map((user, index) => (
              <CardWithScrollAnimation key={user.idPublish} index={index} value={valueId.valueId} {...user} />
            ))
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

const CardWithScrollAnimation = ({ index, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara la animación una vez
    threshold: 0.1,   // Se activa cuando el 10% del elemento está en la vista
  });

  return (
    <motion.div
      ref={ref}  // Asocia el ref para detectar si está en el viewport
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
    >
      <Card {...props} /> 
    </motion.div>
  );
};

export default Home;
