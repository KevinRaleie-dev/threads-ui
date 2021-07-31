import React from 'react';
import { Box, Stack, Text, Skeleton, Button } from '@chakra-ui/react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { CreateItemForm } from '../components/createItemForm';
import { useMeQuery } from "../generated/graphql";
import { UserAccount } from "../components/UserAccount";
import { MeAccount } from "../components/MeAccount"
import { CommonUserLayoutBox } from '../shared/CommonUserLayoutBox';
import { replaceDashWithSpace } from "../utils/convert";
import { Helmet } from 'react-helmet-async'

interface ParamProps {
  username: string;
}

export const Account: React.FC<RouteComponentProps> = () => {

  const params = useParams<ParamProps>();

  const { data, loading } = useMeQuery();
  const newUsername = replaceDashWithSpace(data?.me?.username);

  if (loading) {
    return <Skeleton />
  }
  if (!data?.me) {
    return <Redirect to='/login' />
  }
    return (
        <>
          <Helmet>
            <title>{`${newUsername ?? params.username} | Threads`}</title>
          </Helmet>
          { params.username === data?.me?.username ? <>
            <CommonUserLayoutBox>
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
                  {newUsername}
                </Text>
                <Text fontSize='sm' color='gray.500'>
                  {data.me.email}
                </Text>
              </Stack>
            </CommonUserLayoutBox>
            <Box
            px={10}
            display='flex'
            flexDirection='row'
            >
              <CreateItemForm />
              <Button ml={3}>Edit profile</Button>
            </Box>
            <Box
            px={10}
            mt={10}
            >
              <MeAccount data={data} />    
            </Box>
          </> :
          <React.Fragment>
            <UserAccount username={params.username} />
          </React.Fragment>
          }
        </>
    )
}
