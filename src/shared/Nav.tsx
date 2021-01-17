import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import React from 'react'

export const Nav = () => {
    return (
    <Flex p={4} position='sticky' zIndex={1} top={0} backgroundColor='white' border='1px' borderBottomColor='gray.300'>
        <Box p="2">
            <Heading size="md">
                <Link to='/'>
                    34 Threads
                </Link>
            </Heading>
        </Box>
        <Spacer />
        <Box>
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
        </Box>
    </Flex>
    )
}
