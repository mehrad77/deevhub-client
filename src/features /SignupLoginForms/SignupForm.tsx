import React, { FC, useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useFormState } from 'react-use-form-state';
import { useHistory } from 'react-router-dom';
import { Flex, Button } from '../../components';
import { AuthenticationContext } from '../../providers';
import {} from '../../graphql';
import Swal from 'sweetalert2';

const SignupForm: FC = () => {
  let history = useHistory();
  const [hasError, setError] = useState();
  return <></>;
};

export default SignupForm;
