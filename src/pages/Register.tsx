import React from 'react';
import { Container, Heading, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Button, Checkbox, Spinner } from '@chakra-ui/react';
import {useFormik} from 'formik';
import { Layout } from '../shared/Layout';
import type { RouteComponentProps } from 'react-router-dom';
import type { AuthFormProps } from '../interfaces/auth';
import { useRegisterMutation } from '../generated/graphql';
import {convertToObject} from '../utils/convert';
import { validationSchema } from '../utils/validation';

export const Register: React.FC<RouteComponentProps> = ({history}) => {

    const [register] = useRegisterMutation();

    const formik = useFormik<AuthFormProps>({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async ({email, username, password}, actions) => {
           const response = await register({
               variables: {
                   email,
                   username: username!,
                   password
               }
           });

           if(response.data?.register.errors) {
               actions.setErrors(convertToObject(response.data.register.errors));
           }
           else if(response.data?.register.user) {
               history.push('/login');
           }
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
                        focusBorderColor="black" 
                        type="email" 
                        placeholder="example@example.com"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        {formik.errors.email && formik.touched.email ? (<Text fontSize='sm' color="red.400">{formik.errors.email}</Text>) : null}
                        <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input 
                        focusBorderColor="black" 
                        type="text" 
                        placeholder="CJ"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        />
                        </FormControl>
                        {formik.errors.username && formik.touched.username ? (<Text fontSize='sm' color="red.400">{formik.errors.username}</Text>) : null}
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                        focusBorderColor="black"  
                        type="password" 
                        name="password"
                        placeholder="Password*"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        </FormControl>
                        {formik.errors.password && formik.touched.password ? (<Text fontSize='sm' color="red.400">{formik.errors.password}</Text>) : null}
                        <Checkbox defaultChecked opacity={0.7}>
                            <Text fontSize='sm'>
                                I have read the Terms of Use
                            </Text>
                        </Checkbox>
                        <Button spinner={<Spinner size='sm' color="white" />} disabled={formik.values.password.length < 6} type="submit" colorScheme='gray.700' bg='black' mt={2}>
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </Layout>
        </>
    )
}
