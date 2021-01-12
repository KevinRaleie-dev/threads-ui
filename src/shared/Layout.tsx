import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    children: React.ReactNode;
    mw?: string;
    bg?: string;
    mt?: string | number
}

export const Layout = ({children, mw, bg, mt}: Props) => {
    return (
        <Box
        mt={8}
        bg={bg}
        maxWidth={mw}
        marginTop={mt}
        mx='auto'
        width='100%'
        >
            {children}
        </Box>
    )
}
