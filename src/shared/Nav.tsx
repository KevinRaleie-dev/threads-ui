import React from 'react'
import { Flex, Box, Heading, Spacer, Button, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { useMeQuery } from '../generated/graphql';

export const Nav = () => {
    const {data, loading} = useMeQuery();

    return (
    <Flex p={3} position='sticky' zIndex={1} top={0} backgroundColor='white' borderBottom='1px' borderBottomColor='gray.300'>
        <Box p="2">
            <Heading size="md">
                <Link to={data?.me ? '/browse' : '/'}>
                    34 Threads
                </Link>
            </Heading>
        </Box>
        <Spacer />
        {   
            loading ? <Spinner /> 
            : 
            <Box>
            {
                data?.me ? (
                    <Box>
                       <NavMenu username={data.me.username} />
                    </Box>
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
