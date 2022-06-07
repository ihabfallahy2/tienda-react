import { HiCurrencyEuro } from "react-icons/hi";
import {useState} from 'react';
import { Box, Text, Spacer, Tag, Flex, Button, Icon, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

export function LaunchItem(producto) {
  const [value, setValue] = useState(0)
  const handleChange = (value) => setValue(value)

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Producto <strong>{producto.nombre_corto}</strong> ({producto.familia})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={producto.stock > 10 ? "green" : "red"}>
          {producto.stock > 10 ? "Popular" : "Unpopular"}
        </Tag>
      </Flex>
      <Flex align="center">
        <Icon as={HiCurrencyEuro} color="gray.500" />
        <Text color="gray.500" fontSize="sm" ml={1}>
          {producto.pvp}
        </Text>
        <Text color="gray.500" fontSize="sm" ml={5}>
        stock :: {localStorage.getItem(producto.cod+"cant") != null ? producto.stock-parseInt(localStorage.getItem(producto.cod+"cant")) : producto.stock}
        </Text>
      </Flex>
      <NumberInput defaultValue={1} max={producto.stock} value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Flex >
        <Button mt={2} colorScheme="purple" onClick={function () { Añadir(producto,value) }}>Añadir</Button>
      </Flex>
    </Box>
  )
}

function Añadir(p,n) {
  localStorage.setItem(p.cod, p.cod);
  localStorage.setItem(p.cod+"cant", n)
  location.reload();
}