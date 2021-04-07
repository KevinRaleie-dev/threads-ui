import { Box } from "@chakra-ui/react";
import React from "react";

interface CommonUserLayoutProps {
    children: React.ReactNode;
    
}

export const CommonUserLayoutBox: React.FC<CommonUserLayoutProps> = ({ children }) => {
    return (
        <Box p={10}
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-start'
        >
            {children}
        </Box>
    );
}