import React from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

function UserPage() {
  let { userId } = useParams();
  const id = userId ? Number(userId) : 1;
  return (
    <>
      <Helmet>
        <title> User Page </title>
      </Helmet>
    </>
  );
}

export default UserPage;
