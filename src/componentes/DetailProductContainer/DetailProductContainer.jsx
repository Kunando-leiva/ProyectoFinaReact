import React, {useState, useEffect} from 'react';
import { db } from "../../../db/firebase-config";
import {collection, getDocs, doc} from 'firebase/firestore'
import DetailProduct from '../DetailProductItem/DetailProductItem'


const DetailProductContainer = (props) => {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const productCollectionRef = collection(db, "product");

    const getDetail = async () => {
        const querySnapshot = await getDocs(productCollectionRef);
        setDetail(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setLoading(false);
    }
    console.log(getDetail)

    const getSingleDetail = async (id) => {
      const docRef = doc(productCollectionRef, id);
      const querySnapshot = await getDocs(docRef);
      setDetail(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setLoading(false);
  }

    useEffect(() => {
      const getMock = async() => {
                  const mockData = await new Promise((resolve, reject) => {
                      setTimeout(() => {
                          resolve({
                              title: 'producto mock',
                              image: 'url de imagen',
                              description: 'descripcion del producto',
                              price: '10',
                              category: 'muebles'
                          });
                      }, 2000);
                  });
                  setDetail(mockData);
              }
              getMock();
              getDetail();
            
          }, []);
                

    if (loading) {
        return <h3>Cargando...</h3>
    }

    return (
        <div>
            {detail.map(product => (
                <DetailProduct 
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    id={product.id}
                />
            ))}
        </div>
    );

   }
export default DetailProductContainer;

