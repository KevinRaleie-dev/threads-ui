import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
  fetchItems: Array<Item>;
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  items: Array<Item>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  imageurl: Scalars['String'];
  description: Scalars['String'];
  quantity: Scalars['Int'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthResponse;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  forgotPassword: AuthResponse;
  changePassword: AuthResponse;
  updateUserImage: Scalars['Boolean'];
  createItem: Item;
};


export type MutationRegisterArgs = {
  data: RegisterUserInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateUserImageArgs = {
  imgUrl: Scalars['String'];
};


export type MutationCreateItemArgs = {
  data: ItemInput;
};

/** Return an object of either errors or user when authenticating */
export type AuthResponse = {
  __typename?: 'AuthResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

/** Register user data */
export type RegisterUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Login user data */
export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ItemInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  imageurl: Scalars['String'];
  description: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'AuthResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type CreateItemMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  imageurl: Scalars['String'];
}>;


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem: (
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'username'>
    ) }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'AuthResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AuthResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  ) }
);

export type FetchItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchItemsQuery = (
  { __typename?: 'Query' }
  & { fetchItems: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'imageurl' | 'price' | 'description'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )> }
);

export type FindByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindByUsernameQuery = (
  { __typename?: 'Query' }
  & { getUserByUsername?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'imageurl' | 'price'>
    )> }
  )> }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name' | 'imageurl' | 'price'>
    )> }
  )> }
);


export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      field
      message
    }
    user {
      id
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($name: String!, $description: String!, $price: Float!, $quantity: Int!, $imageurl: String!) {
  createItem(
    data: {name: $name, description: $description, price: $price, quantity: $quantity, imageurl: $imageurl}
  ) {
    user {
      email
      username
    }
    id
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      quantity: // value for 'quantity'
 *      imageurl: // value for 'imageurl'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, baseOptions);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    errors {
      field
      message
    }
    user {
      id
    }
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(data: {email: $email, username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FetchItemsDocument = gql`
    query FetchItems {
  fetchItems {
    user {
      username
    }
    id
    imageurl
    price
    description
  }
}
    `;

/**
 * __useFetchItemsQuery__
 *
 * To run a query within a React component, call `useFetchItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchItemsQuery(baseOptions?: Apollo.QueryHookOptions<FetchItemsQuery, FetchItemsQueryVariables>) {
        return Apollo.useQuery<FetchItemsQuery, FetchItemsQueryVariables>(FetchItemsDocument, baseOptions);
      }
export function useFetchItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchItemsQuery, FetchItemsQueryVariables>) {
          return Apollo.useLazyQuery<FetchItemsQuery, FetchItemsQueryVariables>(FetchItemsDocument, baseOptions);
        }
export type FetchItemsQueryHookResult = ReturnType<typeof useFetchItemsQuery>;
export type FetchItemsLazyQueryHookResult = ReturnType<typeof useFetchItemsLazyQuery>;
export type FetchItemsQueryResult = Apollo.QueryResult<FetchItemsQuery, FetchItemsQueryVariables>;
export const FindByUsernameDocument = gql`
    query FindByUsername($username: String!) {
  getUserByUsername(username: $username) {
    id
    email
    username
    items {
      id
      imageurl
      price
    }
  }
}
    `;

/**
 * __useFindByUsernameQuery__
 *
 * To run a query within a React component, call `useFindByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindByUsernameQuery(baseOptions: Apollo.QueryHookOptions<FindByUsernameQuery, FindByUsernameQueryVariables>) {
        return Apollo.useQuery<FindByUsernameQuery, FindByUsernameQueryVariables>(FindByUsernameDocument, baseOptions);
      }
export function useFindByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindByUsernameQuery, FindByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<FindByUsernameQuery, FindByUsernameQueryVariables>(FindByUsernameDocument, baseOptions);
        }
export type FindByUsernameQueryHookResult = ReturnType<typeof useFindByUsernameQuery>;
export type FindByUsernameLazyQueryHookResult = ReturnType<typeof useFindByUsernameLazyQuery>;
export type FindByUsernameQueryResult = Apollo.QueryResult<FindByUsernameQuery, FindByUsernameQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    items {
      id
      name
      imageurl
      price
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;