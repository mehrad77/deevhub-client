import React, { FC, useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useFormState } from 'react-use-form-state';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { Flex, Button } from '../../components';
import { AuthenticationContext } from '../../providers';
import { validatePassword } from '../../utils ';
import {} from '../../graphql';

interface LoginFormFields {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  let history = useHistory();
  const [hasError, setError] = useState();
  // const { setToken } = useContext(AuthenticationContext);
  // const [loginUser, { loading, error, data }] = useMutation(null);
  // const [formState, { email, password }] = useFormState<LoginFormFields>();
  // const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const res = await loginUser({
  //     variables: {
  //       email: formState.values.email,
  //       password: formState.values.password,
  //     },
  //   });
  //   setToken(res.data.loginUser.token, JSON.stringify(res.data.loginUser.user));
  //   // redirect to first page after auth
  //   history.push('/');
  // };
  // if (error && !hasError) {
  //   console.error({ error });
  //   Swal.fire('Oops...', error.message, 'error');
  //   setError(error.message);
  // }
  // // TODO: Reuse FB-GOOGLE authentication
  // const responseGoogle = async (
  //   response: GoogleLoginResponse | GoogleLoginResponseOffline | any,
  // ) => {
  //   console.log({ response });
  //   // const userObject = {
  //   //   username: response.w3.ofa,
  //   //   password: 'test',
  //   // };
  //   // if (response.w3.ofa) {
  //   //   await localStorage.setItem('user', JSON.stringify(userObject));
  //   //   await window.location.reload();
  //   // } else {
  //   // }
  // };
  return (
    <>
      {/* <StyledForm onSubmit={SubmitForm}> */}
      <Flex flexDirection="row">
        {/* <GoogleLogin
          clientId="542251738139-0hu61ps7s7vbk12ojl663e4482dglg5e.apps.googleusercontent.com" //id gotten from Google
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        /> */}
      </Flex>
      <Flex flexDirection="row">
        <Button text="Login with Facebook" width="100%" kind="outlined" />
      </Flex>
      <hr />
      {/* <Input
        {...email('email')}
        error={formState.errors.email}
        touched={formState.touched.email}
        disabled={loading}
        title="Email"
        placeholder="me@example.org"
        required
      /> */}
      {/* <Input
        {...password({
          name: 'password',
          validate: validatePassword,
        })}
        error={formState.errors.password}
        touched={formState.touched.password}
        disabled={loading}
        title="Password"
        placeholder="********"
        required 
      />
      <Flex flexDirection="row-reverse">
        <Button text="Login" width="80px" loading={loading} />
      </Flex>*/}
      {/* </StyledForm> */}
    </>
  );
};

export default LoginForm;
