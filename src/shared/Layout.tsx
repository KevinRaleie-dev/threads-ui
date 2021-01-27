import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    mw?: string;
    bg?: string;
    mt?: string | number;
    children: React.ReactNode;
    rest?: React.HTMLAttributes<{}>;
}

export const Layout = ({children, mw, bg, mt, ...rest}: Props) => {
    return (
        <Box
        mt={8}
        bg={bg}
        maxWidth={mw}
        marginTop={mt}
        mx='auto'
        width='100%'
        {...rest}
        >
            {children}
        </Box>
    )
}
