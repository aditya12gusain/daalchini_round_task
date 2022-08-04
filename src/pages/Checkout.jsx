import { Box, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { DefaultState } from '../context/DefaultContext';
import CheckoutBar from '../Components/CheckoutBar';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CartProduct from '../Components/CartProduct';

const Checkout = () => {
  const { cart } = DefaultState();

  const navigate = useNavigate();

  return (
    <Box bg="gray.50">
      <Box
        h={'calc(100vh - 60px)'}
        width={'95%'}
        marginX="auto"
        paddingBottom="5"
        overflow={'auto'}
      >
        <Box
          display={'flex'}
          gap={5}
          alignItems={'center'}
          justifyContent={{ base: 'space-between', md: 'flex-start' }}
          marginBottom={5}
          paddingX={3}
          paddingY={5}
          position={'sticky'}
          top={'0px'}
          bg={'gray.50'}
          zIndex={5}
        >
          <Button
            borderRadius={'full'}
            bg={'gray.200'}
            onClick={() => navigate('/')}
          >
            <IoIosArrowBack />
          </Button>
          <Text
            fontFamily={'heading'}
            fontWeight={'bold'}
            fontSize={{ base: '20', md: 30 }}
            position={{ base: 'static', md: 'sticky' }}
            left={{ base: '0%', md: '50%' }}
            transform={{ base: '', md: 'translateX(-50%)' }}
          >
            Checkout
          </Text>
        </Box>

        <Box borderBottom={'1px'} borderColor={'gray.300'} padding={'10px'}>
          <Text color={'gray.500'}>PICKUP POINT</Text>
        </Box>
        <Box padding="10px">
          <Text fontWeight={'bold'} fontSize={'18px'}>
            Address
          </Text>
          <Text>
            Daalchini Office Noida Uttar Pradesh, Order expires in 30 minutes
          </Text>
        </Box>

        <Box borderBottom={'1px'} borderColor={'gray.300'} padding={'10px'}>
          <Text color={'gray.500'}>CART DETAILS</Text>
        </Box>
        <Box padding={2}>
          {cart.length > 0 && (
            <Grid
              templateColumns={{
                base: '1.5fr 1fr 1fr',
                md: 'repeat(3, 1fr)',
              }}
              gap={6}
              padding={'14px'}
              position={'sticky'}
              top={'-8px'}
              bg={'gray.50'}
              zIndex={1}
            >
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                gap={'15px'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Items
                </Text>
              </GridItem>
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Quantity
                </Text>
              </GridItem>
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Price
                </Text>
              </GridItem>
            </Grid>
          )}
          {cart.length === 0 && (
            <Box
              height={'100%'}
              width={'100%'}
              display="flex"
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Text fontFamily={'heading'} fontSize={25}>
                Cart is Empty
              </Text>
            </Box>
          )}
          {cart.map(item => (
            <CartProduct key={item.id} data={item} />
          ))}
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={{ base: 'space-between', md: 'space-around' }}
            padding={'20px 10px'}
          >
            <Text fontWeight={'bold'} fontSize={24}>
              Sub Total:
            </Text>
            <Text
              fontWeight={'bold'}
              fontSize={24}
              textAlign={{ base: 'right', md: 'center' }}
            >
              Rs.{' '}
              {cart.reduce((curr, val) => curr + val.quantity * val.price, 0)}{' '}
            </Text>
          </Box>
        </Box>
      </Box>
      <CheckoutBar />
    </Box>
  );
};

export default Checkout;
