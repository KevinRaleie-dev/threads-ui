import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useParams } from "react-router-dom";
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
          { params.username === meData?.me?.username ? <span>They are the same</span> : (
            <>
              { usernameData?.getUserByUsername?.username ? <span>This user exists, display their component</span> : <span>
                  This user does not exist.
                </span>
              }
            </>
          )}
        </>
    )
}
