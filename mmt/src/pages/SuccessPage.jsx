import React, { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, Box, Button, Container, Input, Spinner, Stack, Text } from '@chakra-ui/react';

const SuccessPage = () => {
    const [formData, setFormData] = useState('');
    const [loading, setLoading] = useState(false);
    const FormRef = useRef();
    const [count, setCount] = useState(5);
    const ref = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        console.log('formData');
        e.preventDefault();
        setLoading(true);
        ref.current = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(ref.current);
                    setLoading(false);
                    if (formData.name === localStorage.getItem('name')) {
                        FormRef.current.reset();
                        navigate("/");
                    } else {
                        alert("Sorry!😒 Please Fill Correct Username, which you filled at the time of Login");
                        setCount(5);
                    }
                }
                return prev - 1;
            });
        }, 1000)
        return () => {
            clearInterval(ref.current);
        };
    };

    if (localStorage.getItem('token') === null) {
        return <Navigate to="/login" />
    };

    return (
        <Container mt={{ base: '20%', md: '10%', sm: '20%' }}>
            <Stack spacing={3}>
                <Alert status='success'>
                    <AlertIcon />
                    Successfully made the Booking❤️
                </Alert>
                <Alert status='success' fontSize={{ base: '12px', "2xl": '18px', xl: '18px', md: '18px', sm: '12px' }}>
                    <AlertIcon />
                    You will Redirect in <Text color={"red"} m="0 5px" fontSize={"23px"} fontFamily="cursive">{count}</Text> seconds, Please Wait!!😒
                </Alert>
            </Stack>

            <Container mt={"15%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" padding={"50px 20px"}>
                <form onSubmit={onSubmit} ref={FormRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <Box display={'flex'} gap={'1px'}>
                        <Input required color={"green"} w="300px" m={"1%"} type="text" name='name' placeholder="Username" onChange={handleChange} />
                        <span style={{ color: 'red', fontSize: '21px' }}>*</span>
                    </Box>
                    <Box>
                        <Input m={"1%"}
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            color={"green"} w="300px"
                            name='password'
                        />
                    </Box>
                    <Box>
                        <Button color={"green"} type="submit">
                            {loading ? <Spinner color="red.500" size="md" /> : "CHECKOUT"}
                        </Button>
                    </Box>
                </form>
            </Container>
        </Container>
    );
}

export default SuccessPage;