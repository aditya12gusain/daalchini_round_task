import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg={'green.500'}
      height="100vh"
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      color={'white'}
      gap={5}
    >
      <Text fontSize={40} fontFamily={'monospace'} textAlign="center">
        Order Confirmed
      </Text>
      <FaRegCheckCircle fontSize={50} />
      <Button
        onClick={() => navigate('/')}
        cursor={'pointer'}
        variant="link"
        color="white"
      >
        Go Back To Home Page
      </Button>
    </Box>
  );
};

export default OrderPlaced;
