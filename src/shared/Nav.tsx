import { Flex, Box, Heading, Spacer, Button, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import React from 'react'
import { useMeQuery } from '../generated/graphql';

export const Nav = () => {
    const {data, loading, error} = useMeQuery();

    console.log('me query',data?.me);
    return (
    <Flex p={4} position='sticky' zIndex={1} top={0} backgroundColor='white' borderBottom='1px' borderBottomColor='gray.300'>
        <Box p="2">
            <Heading size="md">
                <Link to='/'>
                    34 Threads
                </Link>
            </Heading>
        </Box>
        <Spacer />
        {!loading && error ? (<>{error?.message}</>) : 
        <Box>
            {
                data?.me ? (
                    <>
                        <Text>{data.me.username}</Text>
                        <Button>Logout</Button>
                    </>
                ) : (
                    <>
                        <Link to="/register">
                        <Button colorScheme="black" bg='black' mr="4">
                            Sign Up
                        </Button>
                        </Link>
                        <Link to='/login'>
                            <Button colorScheme="teal" variant='ghost' color='black'>
                                Sign In         
                            </Button>
                        </Link>
                    </>
                )
            }
           
        </Box>
        }
    </Flex>
    )
}
