import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { convertToObject } from '../utils/convert';
import { useForgotPasswordMutation } from '../generated/graphql';

interface ChangePasswordFormProps {
    displayText: string;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({displayText}) => {
    
    const [forgotPassword] = useForgotPasswordMutation()
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    
    const [email, setEmail] = useState('');
    const [displayButton, setDisplayButton] = useState<string>('');
    const [displaySuccess, setDisplaySuccess] = useState<string>('none');

    const displayError = useRef('');

    const handleError = (error: string): void => {
        toast({
            position: "bottom-left",
            render: () => (
                <Box
                color="white"
                bg="#b80c09"
                p={3}
                borderRadius={8}
                >
                    <Text fontSize="sm">
                        {error}
                    </Text>
                </Box>
            )
        })
    }

    const formik = useFormik({
        initialValues: {
            email: email,
        },
        onSubmit: async ({email}, actions) => {
            try {
                const response = await forgotPassword({
                    variables: {
                        email
                    }
                });

                if (response.data?.forgotPassword.errors) {
                    const error = convertToObject(response.data.forgotPassword.errors);
                    actions.setErrors(error);
                }
                else if(response.data?.forgotPassword.user) {
                    actions.setSubmitting(false)
                    setDisplayButton("none");
                    setDisplaySuccess("");
                    actions.resetForm();
                }
            } catch (error) {
                displayError.current = error.message;
                handleError(displayError.current);
            }
        }
    })

    return (
        <Box>
            <Text _hover={{cursor: "pointer"}} fontSize='sm' opacity={0.7} align='center' onClick={onOpen}>
                {displayText}
            </Text>
            <Modal isOpen={isOpen} onClose={() => {
                setDisplayButton('');
                setDisplaySuccess('none');
                onClose();
                }} closeOnOverlayClick={true}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Password Problems?</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={formik.handleSubmit}>
                        <ModalBody>
                            <Text color="gray.600" fontSize="sm" mb={3}>
                                Enter your email address to receive a link to change your password.
                            </Text>
                            <Input
                            focusBorderColor="black"
                            type="email"
                            id="email"
                            name={email}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Enter your email"
                            />
                            {formik.errors.email && formik.touched.email ? (<Text fontSize='sm' color="red.400">{formik.errors.email}</Text>) : null}
                        </ModalBody>
                        <ModalFooter>
                        <Button isDisabled={formik.values.email === ''} display={displayButton} isLoading={formik.isSubmitting} type="submit" variant="outline">Send link</Button>
                        <Text display={displaySuccess} ml={2} fontSize="sm" fontWeight="500">Sent 🚀, please check your email</Text>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    )
}
