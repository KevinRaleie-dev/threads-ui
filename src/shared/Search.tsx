import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

export const Search: React.FC = () => {
    return (
        <Container>
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
                />
                <Input
                focusBorderColor="black" 
                type="search"
                placeholder="Search for items, brands, stores..."
                />
            </InputGroup>
        </Container>
    )
}
