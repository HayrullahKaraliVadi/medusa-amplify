import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $storefrontId: String!) {
    signUp(email: $email, password: $password, storefrontId: $storefrontId) {
      message
      idToken
      accessToken
      refreshToken
      error
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!, $storefrontId: String!) {
    signIn(email: $email, password: $password, storefrontId: $storefrontId) {
      message
      idToken
      accessToken
      refreshToken
      error
    }
  }
`;

export const CONFIRM_SIGN_UP = gql`
  mutation ConfirmSignUp($email: String!, $verificationCode: String!) {
    confirmSignUp(email: $email, verificationCode: $verificationCode) {
      message
      idToken
      accessToken
      refreshToken
      error
    }
  }
`;