import { useState, useEffect } from 'react'
import { Heading, Flex, Icon, Button, Spacer, Box , Tag} from '@chakra-ui/react'
import * as API from "./services/productos";
import { LaunchItem } from './components/LaunchItem';
import { HiOutlineShoppingCart } from "react-icons/hi";


function removeItem(param){
  localStorage.removeItem(param);
  localStorage.removeItem(param+"cant");
  location.reload()
}

export function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.getAllProductos().then(setProductos);
  }, []);

  const contenido = [];
  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        <Flex>
          <Flex p='4' align="center">
            <div></div>
            <Icon as={HiOutlineShoppingCart} size="lg" mr={5} />
            Listado Productos
          </Flex>
          <Spacer />
          <Flex p='4'>
          </Flex>
        </Flex>
      </Heading>
      <Flex>
        
      <Flex m={1}>
      <section>
        {
          productos.map((producto) => (
            <LaunchItem key={producto.cod} {...producto} />
          ))
        }
      </section>

      </Flex>
      <Spacer />
      <Flex p={1} height={10}>
      <Box bg="gray.100" m={4} borderRadius="lg">
        {
          productos.map((producto) => (
            <Flex align="center" m={4}>
              {localStorage.getItem(producto.cod)!=null ? <><Tag size="lg" color="dark  ">{localStorage.getItem(producto.cod)}</Tag><Tag size="lg" ml={2} color="dark  ">{localStorage.getItem(producto.cod+"cant")}</Tag></> : ""}
              {localStorage.getItem(producto.cod)!=null ? <Button  ml={4} color="white" colorScheme="red" onClick={function(){removeItem(producto.cod)}}>Remove</Button>  : ""}
            </Flex>
          )) 
        }
      </Box>
      </Flex>
      </Flex>
    </>
  )
}