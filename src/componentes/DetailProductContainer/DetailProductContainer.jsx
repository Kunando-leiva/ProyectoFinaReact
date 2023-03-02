import React, {useState, useEffect} from 'react';
import { db } from "../../../db/firebase-config";
import {collection, doc, getDoc} from 'firebase/firestore'
import DetailProduct from '../DetailProductItem/DetailProductItem'
import { useParams } from 'react-router-dom';
import DetailProductItem from '../DetailProductItem/DetailProductItem';


const DetailProductContainer = (props) => {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const {productId}=useParams();
    const productCollectionRef = collection(db, "product");


    const getSingleDetail = async (id) => {
        if (detail) {
      const docRef = doc(productCollectionRef, productId);
      const querySnapshot = await getDoc(docRef);
      setDetail({ ...querySnapshot.data(), id: querySnapshot.id })
      setLoading(false);
        }
    }
  

    useEffect(() => {
      getSingleDetail()
        },[productId]);

        
                

    if (loading) {
        return <h3>Cargando...</h3>
    }

    return (
        <div>
           
                <DetailProductItem 
                    key={detail.id}
                    id={detail.id}
                    title={detail.title}
                    image={detail.image}
                    description={detail.description}
                    price={detail.price}
                    category={detail.category}
                    
                    test={detail}
                />
           
        </div>
    );

   }
export default DetailProductContainer;

