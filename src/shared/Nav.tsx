import React from 'react'
import { Flex, Box, Spacer, Button, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { useMeQuery } from '../generated/graphql';
import { Search } from './Search';
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
                        <NavMenu username={data.me.username} />
                    </Box>
                ) : (
                    <>
                        { loading ? <Spinner /> : <>
                                <Link to='/login'>
                                    <Button _hover={{ border: '2px', borderColor: 'black'}} 
                                    colorScheme="teal" 
                                    border='2px' 
                                    variant='outline' 
                                    borderColor='gray.100' 
                                    color='black' mr="4">
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
