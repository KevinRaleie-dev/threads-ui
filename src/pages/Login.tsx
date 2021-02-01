import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Grid, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';
import type { RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';
import type { AuthFormProps } from 'src/interfaces/auth';
import { useLoginMutation, MeDocument } from '../generated/graphql';
import { convertToObject } from '../utils/convert';

export const Login: React.FC<RouteComponentProps> = ({history}) => {
    const BOX_HEIGHT = "92vh";

    const [login] = useLoginMutation();

    const formik = useFormik<AuthFormProps>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async ({email, password}, actions) => {
            const response = await login({
                variables: {
                    email,
                    password
                },
                refetchQueries: [{query: MeDocument }]
            });
            console.log('res',response);
            if (response.data?.login.errors) {
                actions.setErrors(convertToObject(response.data.login.errors))
            }
            else if(response.data?.login.user) {

                history.push('/browse');
            }
        }
    })
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <Box w="100%" h={BOX_HEIGHT}>
                <Image
                src='/glasses.jpg'
                width='100%'
                height='100%'
                objectFit='cover'
                alt='Girl with glasses'
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
                                type="email"     
                                name="email"
                                placeholder="example@example.com*"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                />
                            </FormControl>
                            {formik.errors.email && formik.touched.email ? (<Text fontSize='sm' color="red.400">{formik.errors.email}</Text>) : null}
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input 
                                type="password" 
                                name="password"
                                placeholder="Password*"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                />
                            </FormControl>
                            {formik.errors.password && formik.touched.password ? (<Text fontSize='sm' color="red.400">{formik.errors.password}</Text>) : null}
                            <Button type="submit" colorScheme='gray.700' bg='black'>
                                Log In
                            </Button>
                            <Text _hover={{cursor: "pointer"}} fontSize='sm' opacity={0.7} mt={3} align='center'>
                                Forgot Password?
                            </Text>
                        </Stack>
                    </form>
                </Container>
            </Box>
      </Grid>
    )
}
