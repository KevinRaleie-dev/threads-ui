import React from 'react';
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useHistory } from 'react-router-dom';
import { MeDocument, useLogoutMutation } from '../generated/graphql';
import { displayUsernameCharacter } from "../utils/displayUsernameLetter";
import { ErrorModal } from './ErrorModal';
interface Props {
    username: string;
}

export const NavMenu = ({username}: Props) => {
    const history = useHistory();
    const [logout] = useLogoutMutation();

    const character =  displayUsernameCharacter(username);

    const handleNavigation = () => {
        history.push(`/account/${username}`);
    }

    const handleLogout = async ():Promise<any> => {

        try {
            await logout({
                refetchQueries: [{
                    query: MeDocument
                }]
            });
            
            history.push('/login');

        } catch (error) {
            return <ErrorModal error={error.message} />
        }
    }

    return (
        <>
            <Menu>
                <MenuButton p={3} as={Button}  border='2px' variant='outline' borderColor='gray.100' colorScheme="grey" rightIcon={<ChevronDownIcon/>} >
                    <Text>{character}</Text>
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Account">
                        <MenuItem onClick={handleNavigation}>My account</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </>
    );
}