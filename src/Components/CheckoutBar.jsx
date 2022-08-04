import { Box, Button, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { DefaultState } from '../context/DefaultContext';
import LoginModal from './LoginModal';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CheckoutBar = () => {
  const { cart, user, setCart } = DefaultState();

  const toast = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  });

  const paymentClick = () => {
    toast({
      title: 'Order Placed Successfully',
      description: 'You can move back to the home page to continue shopping.',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    navigate('/order-placed');
  };

  return (
    <Box
      height={'60px'}
      bg={'green.500'}
      display={'flex'}
      paddingX={{ base: 5, md: 10 }}
      paddingY={3}
      color={'white'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {user && (
        <Button
          variant={'unstyled'}
          rightIcon={<BsArrowRight fontSize={25} />}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          _hover={{ bg: 'green.700' }}
          _active={{ bg: 'green.800' }}
          padding="10px 20px"
          onClick={() => paymentClick()}
        >
          Select Payment
        </Button>
      )}
      {!user && (
        <LoginModal>
          <Button variant={'unstyled'}>Login</Button>
        </LoginModal>
      )}
    </Box>
  );
};

export default CheckoutBar;
