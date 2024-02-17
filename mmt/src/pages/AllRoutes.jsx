import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import SingleRoute from './SingleRoute';
import SuccessPage from './SuccessPage';


const AllRoutes = () => {
    return (
        <Box display={'flex'} flexFlow={'column'}>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/:serviceID' element={<SingleRoute />}></Route>
                <Route path='/register' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/success' element={<SuccessPage />} />
            </Routes>
            <Box flexGrow={1} minH={'20vh'}></Box>
        </Box>
    );
}

export default AllRoutes;