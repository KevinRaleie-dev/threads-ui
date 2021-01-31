import React from 'react';
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { MeDocument, MeQuery, useLogoutMutation } from '../generated/graphql';

interface Props {
    username: string;
}

export const NavMenu = ({username}: Props) => {
    const history = useHistory();
    const [logout] = useLogoutMutation();

    const handleNavigation = () => {
        history.push(`/account/${username}`);
    }

    const handleLogout = async () => {

        try {
            await logout({
                refetchQueries: [{
                    query: MeDocument
                }]
                // update: (cache, {data}) => {

                //     const userData = cache.readQuery<MeQuery>({
                //         query: MeDocument
                //     });

                //     cache.writeQuery<MeQuery>({
                //         query: MeDocument,
                //         data: {
                //             me: [userData?.me, data?.logout],
                //         }
                //     })

                // }
            });

            // navigate to the login page
            history.push('/login');

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} variant="ghost" colorScheme="grey" >
                    <Text>{username}</Text>
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