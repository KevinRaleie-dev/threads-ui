import React from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = ({children, mw}) => {
    return (
        <Box
        mt={8}
        maxWidth={mw}
        mx='auto'
        width='100%'
        >
            {children}
        </Box>
    )
}
