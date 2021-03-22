import { Box, Text } from '@chakra-ui/react';
import React from 'react'

export const Logo = () => {
    return (
        <>
            <Box
            border='2px'
            borderColor='black'
            width='35px'
            height='35px'
            position='relative'
            >
                <Text
                position='absolute'
                color='black'
                fontWeight='700'
                top={0}
                left='4px'
                >
                    T.
                </Text>
            </Box>
        </>
            
  
    )
}
