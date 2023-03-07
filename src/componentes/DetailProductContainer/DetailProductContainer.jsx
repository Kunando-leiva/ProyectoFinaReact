import React, {useState, useEffect, useContext} from 'react';
import { db } from "../../../db/firebase-config";
import {collection, doc, getDoc} from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom';
import DetailProductItem from '../DetailProductItem/DetailProductItem';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { CartContext } from '../Context/CartContex';


const DetailProductContainer = ({greeting}) => {

    const { AgregaralCarrito } = useContext(CartContext) || {};

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
           {greeting}
                <DetailProductItem 
                    key={detail.id}
                    id={detail.id}
                    title={detail.title}
                    image={detail.image}
                    description={detail.description}
                    price={detail.price}
                    category={detail.category}
                    
                    test={detail}/>
    <ButtonGroup spacing='2'>
        <Button variant='ghost' colorScheme='blue' fontWeight='bold'  onClick={()=> AgregaralCarrito(detail)}>
            Agregar al Carrito
        </Button>
      
        <Link to="/">
            <Button variant='ghost' colorScheme='red' fontWeight='bold'> 
                VOLVER
            </Button>
        </Link>

    </ButtonGroup>
        </div>
    );

   }
export default DetailProductContainer;

