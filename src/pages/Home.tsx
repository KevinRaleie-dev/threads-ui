import React from 'react'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Layout } from '../shared/Layout'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import type { RouteComponentProps } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const Home: React.FC<RouteComponentProps> = ({history}) => {
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
                    From African attire to Streetwear. Indie designer brands. Vintage. Traditional. Whatever your style. Find it here!
                </Text>
                <Button _hover={{color:'black', background: 'white', border: '2px', borderColor:'black' }} mt={5} colorScheme='black' bg='#020202' rightIcon={<ArrowForwardIcon />} onClick={() => {
                    history.push('/browse')
                }}>
                    Start browsing
                </Button>
            </Box>
            <Grid mt='200px' templateColumns="repeat(5, 1fr)" gap={1}>
                <GridItem colSpan={2} h="10" mt='200px'>
                    <Text fontSize='5xl' fontWeight='bold'>
                        Find your style.
                    </Text>
                    <Text my={10} fontSize='xl'>
                        Discover indie designers and brands doing things and the creators behind them, whatever you are into
                        find the seller for you.
                    </Text>
                    <Button colorScheme='black' bg='#020202' onClick={() => {
                    history.push('/browse')
                    }}>
                        Shop now
                    </Button>


                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10">
                    <Image
                    borderRadius={10}
                    src='https://images.unsplash.com/photo-1607629002474-af96a30346c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGF0dGlyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                    />
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(5, 1fr)" gap={1}>
                <GridItem colSpan={2} h="10" mt='500px'>
                    <Image
                    borderRadius={10}
                    src='https://images.unsplash.com/photo-1576775068951-d4983d253497?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmVldCUyMHdlYXJ8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                    />
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" mt="700px">
                    <Text fontSize='5xl' fontWeight='bold'>
                        Sell, sell, sell.
                    </Text>
                    <Text my={10} fontSize='xl'>
                       Start by selling a few items to build that fashion empire you want. We'll help you figure it all
                       out and help you get there. Its easy to get started.
                    </Text>
                    <Button colorScheme='black' bg='#020202' onClick={() => {
                    history.push('/login')
                    }}>
                        Start selling on Threads
                    </Button>
                </GridItem>
            </Grid>
            <Text align='center' fontWeight='600' fontSize='3xl' my='500px'>
                Become part of a community that wants to transform fashion an item a time.
            </Text>
        </Layout>
    )
}

export default withRouter(Home);
