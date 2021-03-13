import React from 'react'
import { Flex, Box, Heading, Spacer, Button, Spinner, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { useMeQuery } from '../generated/graphql';
import { Search } from './Search';

export const Nav = () => {
    const {data, loading} = useMeQuery();

    return (
    <Flex p={3} position='sticky' zIndex={1} top={0} backgroundColor='white' borderBottom='1px' borderBottomColor='gray.300'>
        <Box p="2">
            <Heading size="md">
                <Link to={data?.me ? '/browse' : '/'}>
                    #Threads
                </Link>
            </Heading>
        </Box>
            <>
                { data?.me ? <Search /> : <Spacer /> }
            </>
         {   
            loading ? <Spinner /> 
            : 
            <Box>
            {
                data?.me ? (
                    <Box 
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-between'
                    >
                        <Text fontWeight="500" mr={2}>Sell Item</Text>
                        <NavMenu username={data.me.username} />
                    </Box>
                ) : (
                    <>
                        { loading ? <Spinner /> : <>
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
                        }
                    </>
                )
            } 
            </Box>
        }
    </Flex>
    )
}
