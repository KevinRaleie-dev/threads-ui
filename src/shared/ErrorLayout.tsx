import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const ErrorLayout = () => {
    return (
        <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt='250px'
        >
          <Text fontWeight='bold' fontSize='xl'>
            Sorry, that page does not exist. Please try again.
          </Text>
          <Text>
            404 page not found.
          </Text>
        </Box>
    )
}

