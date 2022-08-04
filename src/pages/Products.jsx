import { Box, Grid, Text } from '@chakra-ui/layout';
import React from 'react';
import AppBar from '../Components/AppBar';
import { DefaultState } from '../context/DefaultContext';
import Product from '../Components/Product';

const Products = () => {
  const { products } = DefaultState();

  return (
    <Box bg="gray.50">
      <Box
        h={'calc(100vh - 60px)'}
        width={'95%'}
        marginX="auto"
        paddingY="5"
        overflow={'auto'}
      >
        <Text fontFamily={'heading'} fontWeight={'bold'} fontSize={30}>
          Products
        </Text>

        <Grid
          gap={5}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          marginTop={5}
        >
          {products.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </Grid>
      </Box>
      <AppBar />
    </Box>
  );
};

export default Products;
