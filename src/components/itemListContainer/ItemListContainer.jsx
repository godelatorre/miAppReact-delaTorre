import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase';


function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


    //FIREBASE
     
    useEffect (()=>{

    setLoading (true)
    
    const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection (db,"productos" )
    
    getDocs(productsCollection) 
    .then ((res)=> {
      const list = res.docs.map ((product)=>{
        return{
          id: product.id,
          ...product.data ()
        }
      })
      
      setProductos(list)

    })
    .catch ((error)=> console.log (error))
    .finally (()=>setLoading(false))
    },[categoryId])

  

  return (
    <div>
      {loading && <Loader />}
      
      <div>
        {categoryId ? (
          <h1 style ={{color:'yellowgreen'}} className='fst-italic'>
            {greeting} <span style={{ color: 'grey' }}>{categoryId}</span>
          </h1>
        ) : (
          <h1 style ={{color:'yellowgreen'}} className='fst-italic'>{greeting}</h1>
        )}

        <ItemList productos={productos} />
      </div>
    </div>
  );
}

export default ItemListContainer;


