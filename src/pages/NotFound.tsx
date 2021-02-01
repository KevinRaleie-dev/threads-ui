import React from 'react';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
        <Stack spacing={2}>
            <Text align="center" fontSize="15rem" fontWeight="700" color="gray.400">
                404
            </Text>
            <Text align="center" fontWeight="500" fontSize="3xl">
                Whoops! Sorry we could not connect the dots...
            </Text>
            <Text align="center" fontSize="xl">
                This page was not found. You may have mistyped the address or the page has been moved.
            </Text>
            <Box 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
                <Link to='/browse'>
                    <Button _hover={{color:'black', background: 'white', border: '2px', borderColor:'black' }} mt={5} colorScheme='black' bg='#020202'>
                            Take me home
                    </Button>
                </Link>
            </Box>
        </Stack>
        </>
    )
}
