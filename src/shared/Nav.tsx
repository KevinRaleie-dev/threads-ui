import React from 'react'
import { Flex, Box, Spacer, Button, Spinner, Text, Stack } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"; //swap these out for feather icons 
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { useMeQuery } from '../generated/graphql';
import { Logo } from './Logo';

export const Nav = () => {
    const {data, loading} = useMeQuery();

    return (
    <Flex py={2} px={5} position='sticky' zIndex={1} top={0} backgroundColor='white' borderBottom='1px' borderBottomColor='gray.300'>
        <Box>
            <Link to={data?.me ? '/browse' : '/'}>
                <Logo />
            </Link>
        </Box>
            <>
                <Spacer />
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
                    justifyItems='space-between'
                    >
                        <Stack direction={["column", "row"]} spacing={5} align="center" cursor="pointer">
                            <Link to="/search">
                                <SearchIcon />
                            </Link>
                            <Text fontSize="sm" fontWeight="500">Buy</Text>
                            <Text fontSize="sm" fontWeight="500">Sell</Text>
                            <NavMenu username={data.me.username} />
                        </Stack>

                    </Box>
                ) : (
                    <>
                        { loading ? <Spinner /> : <>
                                <Link to="/search">
                                    <SearchIcon />
                                </Link>
                                <Link to='/login'>
                                    <Button _hover={{ border: '2px', borderColor: 'black'}} 
                                    colorScheme="teal" 
                                    border='2px' 
                                    variant='outline' 
                                    borderColor='gray.100' 
                                    color='black' mx="4">
                                        Log in         
                                    </Button>
                                </Link> 
                                <Link to="/register">
                                <Button colorScheme="black" bg='black'>
                                    Sign up
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
