import React, { useRef, useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Grid, Heading, Image, Input, Stack, Text, useToast } from '@chakra-ui/react';
import type { RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';
import type { AuthFormProps } from '../interfaces/auth';
import { useLoginMutation, MeDocument } from '../generated/graphql';
import { convertToObject } from '../utils/convert';
import { ChangePasswordForm } from '../components/ChangePasswordForm';
import { Helmet } from "react-helmet";

export const Login: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let displayError = useRef('');
    const toast = useToast();
    const BOX_HEIGHT = "94vh";

    const [login] = useLoginMutation();

    const handleError = (error: string): void => {
        toast({
            position: "bottom-left",
            render: () => (
                <Box
                color="white"
                bg="#1e1e1e"
                p={3}
                borderRadius={8}
                >
                    {error}
                </Box>
            )
        })
    }

    const formik = useFormik<AuthFormProps>({
        initialValues: {
            email: email,
            password: password
        },
        onSubmit: async ({email, password}, actions) => {
            try {
                const response = await login({
                    variables: {
                        email,
                        password
                    },
                    refetchQueries: [{query: MeDocument }]
                });
                if (response.data?.login.errors) {
                    actions.setErrors(convertToObject(response.data.login.errors))
                }
                else if(response.data?.login.user) {
                    history.push('/browse');
                }
            } catch (error) {
                displayError.current = error.message;
                handleError(displayError.current);
            }
        }
    });
    
    return (
        <>
            <Helmet>
                <title>Login | Threads</title>
            </Helmet>
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                    <Box w="100%" h={BOX_HEIGHT}>
                        <Image
                        src='/hoodie.jpg'
                        width='100%'
                        height='100%'
                        objectFit='cover'
                        alt='woman with head scarf and beads'
                        />
                    </Box>
                    <Box w="100%" h={BOX_HEIGHT}>
                        <Container mt={10}>
                            <Heading mt={3} align='center'>
                                Sign In
                            </Heading>
                            <Text fontSize='sm' opacity={0.7} mt={3} align='center'>
                                Find all your favorite items here, now.
                            </Text>
                            <form onSubmit={formik.handleSubmit}>
                                <Stack spacing={3} mt={3}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                        focusBorderColor="black" 
                                        type="email"     
                                        name={email}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        />
                                    </FormControl>
                                    {formik.errors.email && formik.touched.email ? (<Text fontSize='sm' color="red.400">{formik.errors.email}</Text>) : null}
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                        focusBorderColor="black"  
                                        type="password" 
                                        name={password}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        />
                                    </FormControl>
                                    {formik.errors.password && formik.touched.password ? (<Text fontSize='sm' color="red.400">{formik.errors.password}</Text>) : null}
                                    <Button 
                                    type="submit" 
                                    colorScheme='gray.700' 
                                    bg='black'
                                    isLoading={formik.isSubmitting}
                                    >
                                        Log in
                                    </Button>
                                    <ChangePasswordForm displayText="Forgot Password?" />
                                    {/* <Text _hover={{cursor: "pointer"}} fontSize='sm' opacity={0.7} mt={3} align='center'>
                                        Forgot Password?
                                    </Text> */}
                                </Stack>
                            </form>
                        </Container>
                    </Box>
            </Grid>
        </>
    )
}
