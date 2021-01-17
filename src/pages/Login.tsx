import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Grid, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';
import type { RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';
import type { AuthFormProps } from 'src/interfaces/auth';

export const Login: React.FC<RouteComponentProps> = () => {
    const formik = useFormik<AuthFormProps>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <Box w="100%" h="95vh">
                <Image
                src='/hoodie.jpg'
                width='100%'
                height='100%'
                objectFit='cover'
                alt='Girl in a hoodie'
                />
            </Box>
            <Box w="100%" h="95vh">
                <Container mt={10}>
                    <Heading mt={3}>
                        Sign In
                    </Heading>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={3} mt={3}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input 
                                type="email"     
                                name="email"
                                placeholder="example@example.com"
                                onChange={formik.handleChange}
                                value={formik.values.email}
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
                            <Button type="submit" colorScheme='gray.700' bg='black'>
                                Sign In
                            </Button>
                            <Text fontSize='sm' opacity={0.7} mt={3} align='center'>
                                Forgot Password?
                            </Text>
                        </Stack>
                    </form>
                </Container>
            </Box>
      </Grid>
    )
}
