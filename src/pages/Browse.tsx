import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { linkToProfile } from '../utils/linkToProfile';
import { ErrorModal } from '../shared/ErrorModal';
import { useFetchItemsQuery } from '../generated/graphql'

export const Browse = () => { 
    const { data, loading, error } = useFetchItemsQuery(); 
    
    if (loading) {
        return <span>loading...</span>
    }

    if(error) {
        return <ErrorModal error={error.message}/>
    }
    return (
       <Box
       p={10}
       >
           { data?.fetchItems.length === 0 ? <Text align='center'>There aren't any items listed yet.</Text> :
            <>
                <Text fontSize='2xl' fontWeight='bold' align='center' mb='20px'>Shop items we love ♥️</Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                        {data?.fetchItems.map(x => (
                        <>
                            <Box
                            key={x.id}
                            >
                            <Image                      
                            src={x.imageurl}
                            width='350px'
                            objectFit='cover'
                            height='250px'
                            alt={x.description}
                            />
                            <Text fontSize='sm' fontWeight='bold'>R{x.price}</Text>
                            <Link to={linkToProfile(x.user.username)}>
                                <Text fontWeight='bold'>@{x.user.username}</Text>
                            </Link>
                            </Box>
                        </>
                        ))}
                </Grid>
            </>
           }
       </Box>
    )
}
