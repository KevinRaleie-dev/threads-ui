import { Container, Heading, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import {useFormik} from 'formik';
import { Layout } from '../shared/Layout';

export const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: () => {

        }
    });

    return (
        <>
            <Container centerContent={true}>
                <Heading>
                    Sign Up
                </Heading>
                    <Text fontSize='sm' opacity={0.7} mt={3}>
                        Setting up an e-commerce store has never been this easy,
                        get started now 🔥
                    </Text>
            </Container>
            <Layout mw='600px'>
                <form>
                    <Stack spacing={3}>
                        <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input type="text" placeholder='Enter a username' />
                        <FormHelperText>This will be the name of your store.</FormHelperText>
                        </FormControl>
                        <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder='Email address' />
                        </FormControl>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='Create a password' />
                        </FormControl>
                        <Button type="submit" colorScheme='black' bg='black'>
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </Layout>
        </>
    )
}
