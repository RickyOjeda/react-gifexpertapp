import  { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
   const [state,setState]=useState({
        data:[],
        loading:true

    });

    useEffect(() => {
        getGifs(category)
        .then(imgs=>{
            console.log(imgs)
            setState({
                data:imgs,
                loading:false
            })
            
        })
      
    }, [category])

      // const [images, setImages] = useState([])
    // useEffect(()=>{// el componente solo se renderesia cuando se inicializa por primera vez
    //     getGifs(category).then(setImages);
    // },[category])
    // setTimeout(()=>{
    //     setState({
    //         data:[0,1,2,3,4,5,6,7,8,9],
    //         loading:false
    
    //     },3000)
    // });
    return state;
}
