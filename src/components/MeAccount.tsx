import React from "react";
import { Tabs, TabPanel, TabPanels, Tab, Grid, Text, Image, TabList, Box } from "@chakra-ui/react";
import type { MeQuery } from "../generated/graphql";

interface MeAccountProps {
    data: MeQuery | undefined;
}

export const MeAccount: React.FC<MeAccountProps> = ({ data }) => {
    return (
        <Tabs isLazy colorScheme='blackAlpha'>
            <TabList>
                <Tab>Selling</Tab>
                <Tab>Saved</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                {data?.me?.items.length === 0 ? <Text>@{data.me.username} isn't selling anything yet. Check again soon.</Text> : 
                    <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                    {data?.me?.items.map(x => (
                        <>
                        <Box
                        key={x.id}
                        >
                            <Image                      
                            src={x.imageurl}
                            width='350px'
                            height='250px'
                            objectFit='cover'
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
    );
}