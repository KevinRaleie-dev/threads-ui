import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { Layout } from '../shared/Layout'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import type { RouteComponentProps } from 'react-router-dom'

export const Home: React.FC<RouteComponentProps> = () => {
    return (
        <Layout mw='80%' mt='150px'>
            <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            >
                <Text fontSize='6xl' fontWeight='bold' align='center'>
                    Buy. Sell. Discover unique South African fashion.
                </Text>
                <Text fontSize='xl'>
                    Sneakers. Designer. Vintage. Streetwear. Traditional. Whatever your style. Find it on here!
                </Text>
                <Button _hover={{color:'black', background: 'white', border: '2px', borderColor:'black' }} mt={5} colorScheme='black' bg='#020202' rightIcon={<ArrowForwardIcon />}>
                    Get started
                </Button>
            </Box>
        </Layout>
    )
}
