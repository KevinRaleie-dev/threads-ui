import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import React from 'react'

export const Nav = () => {
    return (
    <Flex p={4}>
        <Box p="2">
            <Heading size="md">
                <Link to='/'>
                    Chakra app
                </Link>
            </Heading>
        </Box>
        <Spacer />
        <Box>
            <Button colorScheme="black" bg='black' mr="4">
                <Link to="/register">
                    Sign Up
                </Link>
            </Button>
            <Button colorScheme="teal" variant='ghost' color='black'>
                <Link to='/login'>
                    Log in
                </Link>
            </Button>
        </Box>
    </Flex>
    )
}
