import React from 'react';
import { useParams, withRouter } from "react-router-dom";
import type { RouteComponentProps } from "react-router-dom"
import { useMeQuery } from '../generated/graphql';

interface Props {
    token: string;
}

const ChangePassword: React.FC<RouteComponentProps> = () => {
    const params = useParams<Props>();
    const {data} = useMeQuery()
    console.log(params.token)
    return (
        <div>
            { data?.me && <p>redirecting...</p>}
        </div>
    )
}

export default withRouter(ChangePassword);