import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom'

export const Account: React.FC<RouteComponentProps> = () => {
    const { username }: any = useParams()
    return (
        <div>
            account page {username}
        </div>
    )
}
