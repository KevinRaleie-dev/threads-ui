import { Container, Heading, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Button, Checkbox } from '@chakra-ui/react';
import React from 'react';
import {useFormik} from 'formik';
import { Layout } from '../shared/Layout';
import type { RouteComponentProps } from 'react-router-dom';
import type { AuthFormProps } from '../interfaces/auth';

export const Register: React.FC<RouteComponentProps> = () => {
    const formik = useFormik<AuthFormProps>({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values, actions) => {
           console.log(values)
        }
    });

    return (
        <>
            <Container centerContent={true} mt={5}>
                <Heading>
                    Sign Up
                </Heading>
                <Text fontSize='sm' opacity={0.7} mt={3} align='center'>
                    To create your account we'll need to verify your email address.
                </Text>
            </Container>
            <Layout mw='600px' mt={3}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input 
                        type="email" 
                        placeholder="example@example.com"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input 
                        type="text" 
                        placeholder="CJ"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        />
                        </FormControl>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input 
                        type="password" 
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        </FormControl>
                        <Checkbox defaultIsChecked opacity={0.7}>
                            <Text fontSize='sm'>
                                I have read the Terms and Conditions
                            </Text>
                        </Checkbox>
                        <Button disabled={formik.values.password === ''} type="submit" colorScheme='gray.700' bg='black' mt={2}>
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </Layout>
        </>
    )
}
