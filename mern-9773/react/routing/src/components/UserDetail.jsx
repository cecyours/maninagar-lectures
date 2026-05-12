import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
        return <h3>Details of User ID: {id}</h3>;
    };

export default UserDetail;