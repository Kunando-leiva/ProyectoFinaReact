import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ProductItem from "./ProductItem/ProductItem";

function ProductListContainer({ product, greeting }) {
  
  const mapCategories = {
    mujer: "women's clothing",
    hombre: "men's clothing",
    accesorios: "jewelery",
    electronica: "electronics",
  };

  const categoria = useLocation().pathname.split("/")[1] || "todos";
  const categoriaId = mapCategories[categoria] || "todos";

  return (
    <>
      <Box textAlign="center">
        <Heading as="h1"color="blue.400"fontSize="2xl"fontWeight="bold"lineHeight="tall"
        letterSpacing="wide" textAlign="center">
          {greeting}
        </Heading>
      </Box>
      
      <SimpleGrid  justifyItems="center" minChildWidth="md" spacing="20px" m="6">
        {product .filter(
        (product) =>product.category === categoriaId 
        ||categoriaId === "todos").map((product) => 
        (<ProductItem id={product.id} image={product.image} title={product.title} 
          price={product.price}/>))}
      </SimpleGrid>
    </>
  );
}
export default ProductListContainer