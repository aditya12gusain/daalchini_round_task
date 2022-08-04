import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, GridItem, Text } from '@chakra-ui/layout';
import React from 'react';
import { DefaultState } from '../context/DefaultContext';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';

const Product = ({ data }) => {
  const { cart, setCart } = DefaultState();

  const addToCart = () => {
    console.log(data);
    if (cart.find(item => item.id === data.id)) {
      return;
    } else {
      const toBeAdded = { ...data, quantity: 1 };
      setCart([...cart, toBeAdded]);
    }
  };

  const incrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    // const newCart = cart.filter(e => e.id !== data.id);
    const newCart = cart;
    newCart[newCart.indexOf(product)].quantity++;
    setCart([...newCart]);
  };

  const decrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    if (product.quantity > 1) {
      const newCart = cart;
      newCart[newCart.indexOf(product)].quantity--;
      setCart([...newCart]);
    }
  };

  return (
    <GridItem
      bg={'white'}
      boxShadow="md"
      borderRadius={'lg'}
      minHeight={'150px'}
      border="1px"
      borderColor={'gray.200'}
      _hover={{ boxShadow: 'lg' }}
      overflow="hidden"
    >
      <Image
        src={data.image}
        alt={data.name}
        objectFit={'cover'}
        objectPosition={'center'}
        height={'130px'}
        width={'100%'}
      />
      <div style={{ padding: '10px' }}>
        <Text fontSize={'16px'} fontWeight="bold">
          {data.name}
        </Text>
        <Text color={'gray.600'} fontSize={'12px'} marginBottom={1}>
          {data.description}
        </Text>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          gap={'2'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={{ base: '17px', md: '20px' }}>{data.price} ₹</Text>
          {cart.find(item => item.id === data.id) ? (
            <ButtonGroup
              size="sm"
              isAttached
              variant="outline"
              width={{ base: '100%', md: 'auto' }}
            >
              <IconButton
                icon={<IoMdAdd />}
                onClick={incrementCount}
                flex={{ base: 'auto' }}
              />
              <Button flex={{ base: 'auto' }}>
                {cart.find(item => item.id === data.id).quantity}
              </Button>
              <IconButton
                disabled={cart.find(item => item.id === data.id).quantity === 1}
                icon={<RiSubtractLine />}
                onClick={decrementCount}
                flex={{ base: 'auto' }}
              />
            </ButtonGroup>
          ) : (
            <Button colorScheme={'green'} onClick={() => addToCart()}>
              Add
            </Button>
          )}
        </Box>
      </div>
    </GridItem>
  );
};

export default Product;
