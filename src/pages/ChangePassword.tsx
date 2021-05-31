import React from 'react';
import { useParams, withRouter } from "react-router-dom";
import type { RouteComponentProps } from "react-router-dom";
import { Button, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { Layout } from '../shared/Layout';
import { useFormik } from 'formik';
import { useChangePasswordMutation } from '../generated/graphql';
import { convertToObject } from '../utils/convert';

interface Props {
    token: string;
}

const ChangePassword: React.FC<RouteComponentProps> = ({history}) => {

    const toast = useToast();

    const [changePassword] = useChangePasswordMutation()
    const params = useParams<Props>();

    console.log(params.token);

    const handleSuccess = (title: string, status: "info" | "warning" | "success" | "error" | undefined, description: string): void => {
        toast({
            title ,
            description,
            status,
            duration: 3000,
            isClosable: true,
        });
    }

    const formik = useFormik({
        initialValues: {
            password: '',
            token: params.token
        },
        onSubmit: async ({ token, password }, actions) => {
            try {
                const response = await changePassword({
                    variables: {
                        token,
                        newPassword: password
                    }
                });

                if (response.data?.changePassword.errors) {
                    const error = convertToObject(response.data.changePassword.errors)
                    actions.setErrors(error);
                }
                else if (response.data?.changePassword.user) {
                    // display toast and redirect to login
                    handleSuccess("Password reset 🎉", "success", "You can now sign into your account.");
                    setTimeout(() => {
                        history.push("/login")
                    }, 3000);
                }
            } catch (error) {
                handleSuccess("Something went wrong", "error", error.message);
            }
        }
    })
    return (
        <Layout mw='450px' mt="80px">
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <Text fontSize="3xl" fontWeight="600">Reset Your Password</Text>
                    <Text color="gray.500">Enter your new password to login again.</Text>
                    <Input
                    id="token"
                    name="token"
                    value={formik.values.token}
                    onChange={formik.handleChange}
                    display="none"
                    />
                    {formik.errors.token && formik.touched.token ? (<Text fontSize='sm' color="red.400">{formik.errors.token}</Text>) : null}
                    <Input
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    focusBorderColor="black"
                    placeholder="Enter your new password"
                    />
                    {formik.errors.password && formik.touched.password ? (<Text fontSize='sm' color="red.400">{formik.errors.password}</Text>) : null}
                    <Button isLoading={formik.isSubmitting} type="submit" colorScheme="black" bg="#1e1e1e">
                        Change password
                    </Button>
                </Stack>
            </form>
        </Layout>
    )
}

export default withRouter(ChangePassword);