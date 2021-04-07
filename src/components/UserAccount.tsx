import React from "react";
import { Box, Stack, Text, Tabs, TabList, Grid, Tab, TabPanel, TabPanels, Image, Skeleton } from "@chakra-ui/react";
import { useFindByUsernameQuery } from "../generated/graphql";
import { ErrorModal } from "../shared/ErrorModal";
import { ErrorLayout } from "../shared/ErrorLayout";
import { CommonUserLayoutBox } from "../shared/CommonUserLayoutBox";
import { replaceDashWithSpace } from "../utils/convert";

interface UserAccountProps {
    username: string;
}

export const UserAccount: React.FC<UserAccountProps> = ({username}) => {

    const { data, loading, error } = useFindByUsernameQuery({
        variables: {
            username: username
        }
    });
    const newUsername = replaceDashWithSpace(data?.getUserByUsername?.username);

    if (loading) {
        return <Skeleton />
    }

    if (error) {
        return <ErrorModal error={error.message}/>
    }

    return (
        <React.Fragment>
            { data?.getUserByUsername?.username ? 
            <>
                <CommonUserLayoutBox>
                    {/* Replace with image when implementing edit profile */}
                    <Box
                    backgroundColor='gray.800'
                    width='100px'
                    height='100px'
                    borderRadius='50%'
                    mr={5}
                    />
                    <Stack spacing={2}>
                    <Text fontSize='2xl' fontWeight='bold'>
                        {newUsername}
                    </Text>
                    <Text fontSize='sm' color='gray.500'>
                        {data.getUserByUsername.email}
                    </Text>
                    </Stack>
                </CommonUserLayoutBox>
                <Box
                px={10}
                mt={10}
                >
                    <Tabs isLazy colorScheme='blackAlpha'>
                        <TabList>
                            <Tab>Selling</Tab>
                            <Tab>Saved</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                            {data.getUserByUsername.items.length === 0 ? <Text>@{data.getUserByUsername.username} isn't selling anything yet. Check again soon.</Text> : 
                                <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                                {data.getUserByUsername.items.map(x => (
                                    <>
                                    <Box
                                    key={x.id}
                                    >
                                        <Image                      
                                        src={x.imageurl}
                                        width='350px'
                                        objectFit='cover'
                                        height='250px'
                                        />
                                        <Text fontSize='sm' fontWeight='bold'>R{x.price}</Text>
                                    </Box>
                                    </>
                                ))}
                                </Grid>
                            }
                            </TabPanel>
                            <TabPanel>
                            <Text></Text>
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                </Box>
                <Box
                px={10}
                />  
            </> : <>
                <ErrorLayout />
            </>
            }
        </React.Fragment>
    );
}