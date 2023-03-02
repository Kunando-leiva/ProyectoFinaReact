import { db } from "../../../db/firebase-config";
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";

const ProductContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const getproduct = async () => {
    const productCollectionRef =categoryId === undefined 
                              ? collection (db,"product")
                              : query(collection(db, "product"), where("category", "==", categoryId))

    const querySnapshot = await getDocs(productCollectionRef);

    setProduct(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    setLoading(false);
  };




  useEffect(() => {
    getproduct();
  }, [categoryId]);
  

  if (loading) {
    return <h3>Cargando...</h3>
  }

  return (
    <div> <ProductList products={product} />
    </div>
  );
}

export default ProductContainer;

