import { db } from "../../../db/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";

const ProductContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const productCollectionRef = collection(db, "product");
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const getproduct = async () => {
    const querySnapshot = await getDocs(productCollectionRef);
    setProduct(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    const ProductDocRef = doc(db, "product", id);
    await deleteDoc(ProductDocRef);
    getproduct();
  };

  useEffect(() => {
    getproduct();
  }, []);




useEffect(() => {
  async function fetchData() {
    const response = await fetch(`/api/products?categoryId=${categoryId}`);
    const data = await response.json();
    setProducts(data);
  }

  fetchData();
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

//     const ProductList = () => {
//         const [product, setProduct] = useState([]);
      
//         useEffect(() => {
//           axios.get('https://fakestoreapi.com/products')
//             .then(res => setProduct(res.data))
//             .catch(err => console.log(err));
//         }, []);
//       console.log(product)
//         return (
//           <Container>
//             {product.map((product) => {
//              return <ProductItem 
//              key={product.id} 
//              id={product.id} 
//              title={product.title}
//              image={product.image}
//              price={product.price}
//              description={product.description}
//              category={product.category}/>;
//       })}
//           </Container>
    
          
//         );
//       };
    
//       return (
//           <div>
//               <ProductList />
//           </div>
//       )


// };



