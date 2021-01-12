import { Container, Heading, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Button, Checkbox } from '@chakra-ui/react';
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
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <>
            <Container centerContent={true}>
                <Heading>
                    Sign Up
                </Heading>
                    <Text fontSize='sm' opacity={0.7} mt={3}>
                        To create your account we'll need to verify your email address. We'll never display this publicly.
                    </Text>
            </Container>
            <Layout mw='600px' mt={3}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input 
                        type="text" 
                        placeholder='Enter a username'
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        />
                        <FormHelperText>This will be the name of your store.</FormHelperText>
                        </FormControl>
                        <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input 
                        type="email" 
                        placeholder='Email address'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        </FormControl>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input 
                        type="password" 
                        placeholder='Create a password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        </FormControl>
                        <Checkbox defaultIsChecked opacity={0.7}>
                            I have read the Terms and Conditions
                        </Checkbox>
                        <Button type="submit" colorScheme='gray.700' bg='black' mt={2}>
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </Layout>
        </>
    )
}
