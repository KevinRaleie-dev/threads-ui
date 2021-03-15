import { Box, Stack, Text, Tabs, TabList, Tab, TabPanel, TabPanels, Image, Grid } from '@chakra-ui/react';
import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { CreateItemForm } from '../shared/createItemForm';
import { useFindByUsernameQuery, useMeQuery } from "../generated/graphql";

interface ParamProps {
  username: string;
}

export const Account: React.FC<RouteComponentProps> = () => {

  const params = useParams<ParamProps>();
  const { data: meData, loading: meLoading } = useMeQuery();
  const { data: usernameData, loading: usernameLoading } = useFindByUsernameQuery({
    variables: {
      username: params.username
    }
  });

  if (meLoading && usernameLoading) {
    return <span>loading...</span>
  }
  if (!meData?.me) {
    return <Redirect to='/login' />
  }
    return (
        <>
          { params.username === meData?.me?.username ? <>
            <Box p={10}
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
            >
              <Box
              backgroundColor='gray.800'
              width='100px'
              height='100px'
              borderRadius='50%'
              mr={5}
              >
              </Box>
              <Stack spacing={2}>
                <Text fontSize='2xl' fontWeight='bold'>
                  {meData.me.username}
                </Text>
                <Text fontSize='sm' color='gray.500'>
                  {meData.me.email}
                </Text>
              </Stack>
              
            </Box>
            <Box
            px={10}
            display='flex'
            >
              <CreateItemForm />
            </Box>
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
                    {meData.me.items.length === 0 ? <Text>@{meData.me.username} isn't selling anything yet. Check again soon.</Text> : 
                      <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                        {meData.me.items.map(x => (
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
            </Box>
          </> : ( // user profile
            <>
              { usernameData?.getUserByUsername?.username ? <>
                <Box p={10}
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='flex-start'
                >
                <Box
                backgroundColor='gray.800'
                width='100px'
                height='100px'
                borderRadius='50%'
                mr={5}
                >
              </Box>
                <Stack spacing={2}>
                  <Text fontSize='2xl' fontWeight='bold'>
                    {usernameData.getUserByUsername.username}
                  </Text>
                  <Text fontSize='sm' color='gray.500'>
                    {usernameData.getUserByUsername.email}
                  </Text>
                </Stack>
            </Box>
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
                      {usernameData.getUserByUsername.items.length === 0 ? <Text>@{usernameData.getUserByUsername.username} isn't selling anything yet. Check again soon.</Text> : 
                        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                          {usernameData.getUserByUsername.items.map(x => (
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
            >
            </Box>
              </> : <>
                    <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    mt='250px'
                    >
                      <Text fontWeight='bold' fontSize='xl'>
                        Sorry, that page does not exist. Please try again.
                      </Text>
                      <Text>
                        404 page not found.
                      </Text>
                    </Box>
                </>
              }
            </>
          )}
        </>
    )
}
