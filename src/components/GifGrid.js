// import React, {useState, useEffect}from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

  


    const {data:images,loading}=useFetchGifs(category);

   


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            {/* {loading? 'Cargando.....':'Data carga'} */}
            <div className="card-grid">
                {
                    images.map(img=>(
                        // <li key={id}>{title}</li>
                        <GifGridItem 
                            //img={img}
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
