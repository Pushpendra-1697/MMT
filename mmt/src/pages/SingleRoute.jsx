import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
const jsURL = 'https://render-si4e.onrender.com/mmtData';

const SingleRoute = () => {
  const params = useParams();
  const [data, setData] = useState();
  const neviagte = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(jsURL);
    if (+params.serviceID <= 29) {
      let ans = res.data.Buses.find((ele) => {
        return ele.serviceID === +params.serviceID;
      });
      setData({ btype: 'Bus', bDetails: ans });
    } else if (+params.serviceID <= 46) {
      let ans = res.data.Flights.find((ele) => {
        return ele.serviceID === +params.serviceID;
      });
      setData({ btype: 'Flight', bDetails: ans });
    } else if (+params.serviceID <= 62) {
      let ans = res.data.Hotels.find((ele) => {
        return ele.serviceID === +params.serviceID;
      });
      setData({ btype: 'Hotel', bDetails: ans });
    }
  };

  if (!data) {
    return <Heading textAlign={'center'} mt={'7%'}>Loading.....</Heading>
  }
  if (localStorage.getItem('token') === null) {
    return <Navigate to="/login" />
  };
  return (
    <Container mt={{ base: '20%', md: '10%', sm: '20%' }} p={'20px'} textAlign={'center'} display={'flex'} flexFlow={'column'} gap={'10px'}>
      <Heading>{params.serviceID}</Heading>
      <Text>Type: {data.btype}</Text>
      <Text>Total {data.btype}: {data?.bDetails?.locations.length}</Text>
      <Text>Name: {data?.bDetails?.serviceName}</Text>
      <Box><Button colorScheme='teal' variant='solid' onClick={() => neviagte('/success')}>BOOK</Button></Box>
    </Container>
  );
}

export default SingleRoute;