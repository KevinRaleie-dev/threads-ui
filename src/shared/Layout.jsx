import React from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = ({children, mw, bg, mt}) => {
    return (
        <Box
        mt={8}
        bg={bg}
        maxWidth={mw}
        mt={mt}
        mx='auto'
        width='100%'
        >
            {children}
        </Box>
    )
}
